import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body.NAME || !body.PHONE?.[0]?.VALUE) {
      return NextResponse.json({ error: "Nome e telefone obrigatorios" }, { status: 400 })
    }

    // A URL do webhook ja inclui o endpoint crm.lead.add
    // Formato: https://eraumavez.bitrix24.com.br/rest/912/26bq3i3w2gqqgpnn/crm.lead.add
    const webhookUrl = process.env.BITRIX_WEBHOOK_URL

    if (!webhookUrl) {
      console.error("BITRIX_WEBHOOK_URL not configured")
      return NextResponse.json({ error: "Webhook nao configurado" }, { status: 500 })
    }

    console.log("[v0] Sending to Bitrix:", webhookUrl)
    console.log("[v0] Payload:", JSON.stringify({ fields: body }, null, 2))

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields: body }),
    })

    const responseText = await response.text()
    console.log("[v0] Bitrix response status:", response.status)
    console.log("[v0] Bitrix response:", responseText)

    let data
    try {
      data = JSON.parse(responseText)
    } catch {
      console.error("Failed to parse Bitrix response:", responseText)
      return NextResponse.json({ error: "Resposta invalida do Bitrix" }, { status: 500 })
    }

    if (data.result) {
      return NextResponse.json({ success: true, leadId: data.result })
    } else {
      console.error("Bitrix create error:", data)
      return NextResponse.json({ error: data.error_description || "Erro ao criar lead" }, { status: 500 })
    }
  } catch (error) {
    console.error("Create lead error:", error)
    return NextResponse.json({ error: "Erro interno" }, { status: 500 })
  }
}
