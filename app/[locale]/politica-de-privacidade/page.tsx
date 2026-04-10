import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Privacidade — ERA",
  description: "Política de Privacidade da ERA. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
}

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <Navbar />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-3xl md:text-4xl font-medium text-white mb-8"
            style={{ letterSpacing: "-0.0325em", lineHeight: 1.1 }}
          >
            Política de Privacidade
          </h1>

          <div className="prose prose-sm prose-invert max-w-none space-y-6 text-zinc-400 text-sm leading-relaxed">
            <p className="text-zinc-300">
              Última atualização: Março de 2026
            </p>

            <p>
              A ERA Tecnologia e Comunicação LTDA ("ERA", "nós", "nosso") está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários, clientes e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações.
            </p>

            <h2 className="text-white font-medium text-lg mt-8">1. Dados que coletamos</h2>
            <p>Coletamos os seguintes dados pessoais quando você preenche formulários em nosso site:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nome completo</li>
              <li>E-mail corporativo</li>
              <li>Telefone</li>
              <li>Nome da empresa</li>
              <li>Segmento de atuação</li>
              <li>Informações sobre o porte da empresa (faturamento, número de atendentes)</li>
            </ul>
            <p>Também coletamos automaticamente:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Parâmetros de campanha (UTM source, medium, campaign)</li>
              <li>GCLID (Google Click Identifier)</li>
              <li>Página de entrada (landing page)</li>
              <li>Endereço IP e dados de navegação via Google Analytics e Google Tag Manager</li>
            </ul>

            <h2 className="text-white font-medium text-lg mt-8">2. Como usamos seus dados</h2>
            <p>Utilizamos os dados coletados para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Entrar em contato para apresentar nossas soluções (ERA Chat, ERA Voz, Omni, WhatsApp CoEx)</li>
              <li>Personalizar a recomendação de plano com base no perfil da sua empresa</li>
              <li>Registrar o lead em nosso sistema de CRM (Bitrix24) para acompanhamento comercial</li>
              <li>Medir a eficácia de nossas campanhas de marketing</li>
              <li>Melhorar nossos produtos e serviços</li>
            </ul>

            <h2 className="text-white font-medium text-lg mt-8">3. Base legal para o tratamento</h2>
            <p>
              O tratamento dos seus dados pessoais é realizado com base no seu <strong className="text-white">consentimento</strong> (Art. 7, I da LGPD), fornecido ao preencher o formulário e marcar a caixa de consentimento. Você pode revogar o consentimento a qualquer momento entrando em contato conosco.
            </p>

            <h2 className="text-white font-medium text-lg mt-8">4. Compartilhamento de dados</h2>
            <p>Seus dados podem ser compartilhados com:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Bitrix24</strong> — nosso CRM, onde os leads são armazenados para acompanhamento comercial</li>
              <li><strong className="text-white">Google</strong> — via Google Analytics e Google Ads para medição de campanhas</li>
              <li><strong className="text-white">Meta</strong> — via WhatsApp Business API para comunicação</li>
            </ul>
            <p>Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing sem seu consentimento.</p>

            <h2 className="text-white font-medium text-lg mt-8">5. Armazenamento e segurança</h2>
            <p>
              Seus dados são armazenados em servidores seguros com criptografia. O acesso aos dados é restrito a funcionários autorizados que necessitam das informações para realizar suas funções.
            </p>

            <h2 className="text-white font-medium text-lg mt-8">6. Retenção de dados</h2>
            <p>
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei. Dados de leads comerciais são mantidos por até 2 anos após o último contato.
            </p>

            <h2 className="text-white font-medium text-lg mt-8">7. Seus direitos (LGPD)</h2>
            <p>De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Solicitar a portabilidade de dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>

            <h2 className="text-white font-medium text-lg mt-8">8. Cookies</h2>
            <p>
              Nosso site utiliza cookies para melhorar a experiência de navegação, medir o desempenho de campanhas e personalizar conteúdo. Ao navegar em nosso site, você concorda com o uso de cookies conforme descrito nesta política.
            </p>

            <h2 className="text-white font-medium text-lg mt-8">9. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">ERA Tecnologia e Comunicação LTDA</strong></li>
              <li>R. Miguel Pascoal, 104 - 1º andar, Jardim do Trevo, Campinas - SP, 13041-312</li>
              <li>Torre Alpha - Av. das Nações Unidas, 17007 - Sala 236, Várzea de Baixo, São Paulo - SP, 04730-090</li>
              <li>E-mail: contato@era.com.br</li>
              <li>Telefone: (11) 5192-0035</li>
            </ul>

            <h2 className="text-white font-medium text-lg mt-8">10. Alterações nesta política</h2>
            <p>
              Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento. Alterações significativas serão comunicadas em nosso site. Recomendamos que você revise esta página periodicamente.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
