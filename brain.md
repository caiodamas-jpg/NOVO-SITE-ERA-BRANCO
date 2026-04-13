# ERA CX Landing Page — Brain

> Arquivo de conhecimento auto-mantido do projeto. NÃO commitar no git.
> Todas as entradas devem estar em pt-BR com acentos corretos (ç, ã, õ, é, ê, á, etc.).
> Last compacted: 2026-04-13

## Como atualizar este Brain

- Sempre que uma sessão no Claude resultar em mudança estrutural (nova rota, novo componente reutilizável, novo endpoint, nova decisão de arquitetura, novo token de design, nova integração), adicione/edite a seção correspondente.
- Mudanças pontuais de copy ou estilo NÃO entram aqui — só o que impacta decisões futuras.
- Ao compactar, atualizar a data acima e remover entradas obsoletas.
- Entradas de decisão seguem o formato: `Decision: X → Reason: Y`.

## Stack & Environment

- **Framework:** Next.js 16.0.10 (App Router) + Turbopack
- **Linguagem:** TypeScript + React 19
- **Estilo:** Tailwind CSS 4.1 (config inline via globals.css, não tailwind.config)
- **Animações:** Framer Motion 12.23
- **Fontes:** Geist (via next/font/google)
- **Dev:** `npm run dev -- -p 3000`
- **Deploy:** Vercel
- **CMS Blog:** Keystatic (projeto separado em `blog-era/blog.era`, porta 3001)

## Architecture Decisions

- Decision: Cor principal `#cfff00` (lima/verde) → Reason: cor do logo ERA, usada em todos os CTAs, badges, checks e destaques
- Decision: Background padrão `#2b363d` (dark slate) → Reason: identidade visual dark mode fixa, não há light mode
- Decision: Formulário em 2 etapas separadas por página → Reason: Step 1 (dados + CNPJ) cria lead no Bitrix e redireciona para /obrigado. Step 2 (qualificação) é opcional na página /obrigado
- Decision: Botão WhatsApp flutuante com formulário inline (Nome, Telefone, CNPJ) → Reason: CNPJ substitui a necessidade de confirmação de empresa/idade
- Decision: Componentes de era-chat reutilizados por era-voz e era-omni → Reason: evitar duplicação (SubpageHero, FeatureSection, EraChatFAQ, SubpageCTA)
- Decision: Blog como projeto separado com API pública → Reason: subdomínio blog.era.com.br, consumido via fetch com ISR 1h e fallback graceful
- Decision: Navbar com dropdowns individuais (Era Chat, Era Voz, ERA Omni) → Reason: cada produto tem sua árvore de páginas

## Project Structure

- `app/` — Rotas Next.js (home, planos, integracoes, era-chat/*, era-voz/*, era-omni/*, obrigado, personalize, politica-de-privacidade)
- `app/api/bitrix/` — API Routes server-side para criar/atualizar leads no Bitrix24
- `components/` — Componentes organizados por feature (navbar, footer, hero-animation, ai-section, lead-capture, whatsapp, planos, integracoes, era-chat, era-voz, era-omni, coex-section, podcast-section, obrigado, personalize, home)
- `data/` — Arquivos de dados tipados (integrations.ts, plans.ts, era-chat-pages.ts, era-voz-pages.ts, era-omni-pages.ts)
- `hooks/` — useUTMCapture (captura UTM/GCLID global), useLeadForm (estado do formulário)
- `lib/` — Utilitários (masks.ts, utm.ts, icp-score.ts, recommendation.ts, blog-api.ts)
- `public/images/crms/` — Logos dos CRMs (80x80 PNG transparente)
- `public/images/customers/` — Logos dos clientes
- `.env.local` — BITRIX_WEBHOOK_URL, NEXT_PUBLIC_WHATSAPP_NUMBER, NEXT_PUBLIC_BLOG_URL

## Conventions

- Todos os textos visíveis devem ter acentos corretos em português (ç, ã, é, etc.)
- URL da animação do dashboard: `eracx.com.br` (não app.era.com.br)
- Número WhatsApp: `551151920035` (hardcoded em vários componentes + .env.local)
- Botões CTA: `text-xs px-4 py-2` no mobile, `text-sm px-5 py-2.5` no desktop
- Cor de destaque: `#cfff00` para botões, checks, badges, tabs ativas
- Cards: `border-zinc-800/50 bg-zinc-900/50 rounded-xl` padrão
- Heading style: `letterSpacing: "-0.0325em"`, `fontVariationSettings: '"opsz" 28'`, `lineHeight: 1.1`
- Seções: `py-24 px-6` padrão, `max-w-5xl mx-auto` ou `max-w-6xl`
- Indicador de seção: bolinha `w-2 h-2 rounded-full` + label `text-sm text-zinc-400`

## Routes & Endpoints

### Páginas (estrutura atual — abril/2026)
- `/` — Home (hero + todas as seções)
- `/planos` — Planos com tabs (Era Chat, Era Voz, ERA Omni)
- `/integracoes` — 51 integrações com filtros
- `/era-chat` + 7 subpáginas (whatsapp, redes-sociais, chatbot, ia-generativa, livechat, marketplace, disparos)
- `/era-voz` + 8 subpáginas (contact-center, telefonia, ura, call-center, discador, monitoramento, relatorios, cti)
- `/era-omni` + 6 subpáginas (atendimento-unificado, dashboard, gestao-equipes, ia-analise, canais, enterprise)
- `/obrigado` — Agradecimento + Step 2 opcional (noindex)
- `/personalize` — Sucesso da personalização ou fallback form (noindex)
- `/politica-de-privacidade` — Política de privacidade LGPD

### API Routes
- `POST /api/bitrix/create-lead` — Cria lead no Bitrix24 (Nome, Telefone obrigatórios)
- `POST /api/bitrix/update-lead` — Atualiza lead existente com qualificação

## Component Patterns

- `LeadForm` → usa `useLeadForm` hook, renderiza StepOne, redireciona para /obrigado após envio
- `LeadCaptureModal` → modal com LeadForm, usado em /planos e /integracoes
- `LeadCaptureSection` → versão inline na home com texto à esquerda + form à direita
- `WhatsAppFloatingButton` → FAB fixo bottom-right, popover com form (Nome, Telefone, CNPJ)
- `GlobalProviders` → wrapper no layout root com useUTMCapture + WhatsAppFloatingButton (esconde em /obrigado)
- `NavDropdown` → dropdown com delay de 400ms ao sair (closeTimer ref)
- `HeroAnimation` → dashboard mockup 3D com 4 telas rotativas (Home, Omnichannel, PABX, Dashboards)
- `VozHeroAnimation` → dashboard de voz com 3 telas (Dashboard Fila, Call Center, Monitoramento)
- `OmniChannelAnimation` → celular enviando msgs de 5 canais → painel ERA recebendo (exportada de ai-section.tsx)

## Styles & Design Tokens

- Background principal: `#2b363d`
- Background enterprise: `#1e2a30`
- Background formulário: `#232d33`
- Accent/CTA: `#cfff00`
- Text primary: `#ffffff`
- Text secondary: `text-zinc-400`
- Text muted: `text-zinc-500`
- Border: `border-zinc-800`
- Card bg: `bg-zinc-900/50`
- WhatsApp verde: `#25D366`
- Instagram rosa: `#E1306C`
- Messenger azul: `#0084FF`
- Telegram cyan: `#0088CC`
- Email vermelho: `#EA4335`
- Border radius padrão: `rounded-xl` (cards), `rounded-lg` (botões/inputs)
- Sombra cards: `shadow-2xl shadow-black/50` (para mockups 3D)
- Selection: `background-color: #7170ff; color: white`

## Integrations & APIs

### Bitrix24
- Webhook: `https://era.bitrix24.com.br/rest/114/4pf3gmoy379tg1ej/crm.lead.add.json`
- Usuário webhook: 114 (NÃO trocar — testado e funcionando)
- ASSIGNED_BY_ID: `1`
- Campo CNPJ: `UF_CRM_1770397017792`
- Campo GCLID: `UF_CRM_1762258369972`
- Campo Campanha: `UF_CRM_1743511264307`
- Campo Landing Page: `UF_CRM_1762349845998`
- Campo Botão WPP: `UF_CRM_1762865623361`
- Campo Faturamento: `UF_CRM_1762352042875`
- Campo Segmento: `UF_CRM_1762352553637`
- Campo Score ICP: `UF_CRM_1768125539928`
- Campo Média Atendimento: `UF_CRM_1768126301805`
- Update URL: substituir `crm.lead.add.json` por `crm.lead.update.json`

### UTM Capture
- Hook global `useUTMCapture` roda em todas as páginas via GlobalProviders
- localStorage keys: `era_gclid`, `era_utm_source`, `era_utm_medium`, `era_utm_campaign`, `era_landing_page`
- GCLID: URL > localStorage > referrer
- Landing page: só primeira visita

### GTM Events (apenas 3)
- `lead_form_step1` — formulário principal enviado (antes de /obrigado)
- `lead_form_step2_complete` — step 2 na /obrigado completado (antes de /personalize)
- `whatsapp_click` — botão WhatsApp após preencher Nome + Telefone + CNPJ

### Blog (projeto separado)
- URL: `NEXT_PUBLIC_BLOG_URL` (prod: blog.era.com.br, dev: localhost:3001)
- API consumida via fetch com ISR 1h
- Fallback: se offline, seções não renderizam
- Componentes de integração: BlogSection (home), RelatedBlogPosts, PopularPostsWidget, DynamicBlogCTA

## Known Gotchas

- **Hydration mismatch:** Nunca usar `Math.random()` em componentes SSR. Usar pseudo-random determinístico com `Math.sin(i * seed)` + `Math.round()` para valores de pixel
- **Hydration float precision:** Valores de style como `left`, `top`, `width`, `height` devem ser strings com `px` e arredondados com `Math.round()`
- **Bitrix webhook user:** O token `4pf3gmoy379tg1ej` pertence EXCLUSIVAMENTE ao usuário 114. Usar qualquer outro ID retorna INVALID_CREDENTIALS
- **Telefone sanitização:** Sempre usar `sanitizePhone()` antes de enviar ao Bitrix. Formato: `55XXXXXXXXXXX` (sem máscara)
- **CNPJ 2026+:** Aceita alfanumérico nos primeiros 12 chars, últimos 2 sempre numéricos. Máscara: `XX.XXX.XXX/XXXX-XX`
- **Podcast fetch:** Proxies CORS (corsproxy.io, allorigins) são instáveis. Se falharem, usar vídeo fallback silenciosamente (sem throw)
- **Port 3000 em uso:** Sempre matar processos node antes de reiniciar (`npx kill-port 3000; taskkill //F //IM node.exe`)
- **Conflitos de merge:** Verificar `<<<<<<` em todos os arquivos antes de debugar erros de compilação
- **Date.now() no footer:** Usar `2025` hardcoded em vez de `new Date().getFullYear()` para evitar hydration mismatch

## Anti-Patterns (Don't Do This)

- ❌ NÃO usar `Math.random()` em componentes server-rendered
- ❌ NÃO expor BITRIX_WEBHOOK_URL no frontend (sempre via API Route)
- ❌ NÃO enviar telefone com máscara para o Bitrix
- ❌ NÃO criar componentes duplicados — reutilizar era-chat components
- ❌ NÃO usar `app.era.com.br` nas animações — correto: `eracx.com.br`
- ❌ NÃO omitir acentos em textos visíveis
- ❌ NÃO usar links genéricos ("clique aqui") — sempre anchor text descritivo
- ❌ NÃO criar eventos GTM extras além dos 3 definidos
- ❌ NÃO usar `ASSIGNED_BY_ID: "114"`, `"912"` ou `"2828"` — correto: `"1"`

## Dependencies Notes

- `framer-motion`: Usado extensivamente para animações. `AnimatePresence mode="wait"` para transições entre steps
- `lucide-react`: Biblioteca de ícones padrão do projeto
- `gray-matter` + `reading-time`: Usados no projeto do blog (não no site principal)
- `@keystatic/core`: CMS do blog — configurado com storage local em dev, GitHub em prod
