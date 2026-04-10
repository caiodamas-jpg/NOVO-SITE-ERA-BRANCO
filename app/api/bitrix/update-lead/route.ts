import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { leadId, ...fields } = await req.json()

    if (!leadId) {
      return NextResponse.json({ error: "leadId obrigatorio" }, { status: 400 })
    }

    const webhookUrl = process.env.BITRIX_WEBHOOK_URL
    if (!webhookUrl) {
      console.error("BITRIX_WEBHOOK_URL not configured")
      return NextResponse.json({ error: "Webhook nao configurado" }, { status: 500 })
    }

    const updateUrl = webhookUrl.replace("crm.lead.add.json", "crm.lead.update.json").replace("crm.lead.add", "crm.lead.update")

    console.log("[v0] Updating lead at:", updateUrl)
    console.log("[v0] Lead ID:", leadId)
    console.log("[v0] Fields:", JSON.stringify(fields, null, 2))

    const response = await fetch(updateUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: leadId, fields }),
    })

    const responseText = await response.text()
    console.log("[v0] Bitrix update response:", responseText)

    let data
    try {
      data = JSON.parse(responseText)
    } catch {
      console.error("Failed to parse Bitrix response:", responseText)
      return NextResponse.json({ error: "Resposta invalida do Bitrix" }, { status: 500 })
    }

    if (data.result) {
      return NextResponse.json({ success: true })
    } else {
      console.error("Bitrix update error:", data)
      return NextResponse.json({ error: "Erro ao atualizar lead" }, { status: 500 })
    }
  } catch (error) {
    console.error("Update lead error:", error)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
