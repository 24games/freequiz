# 🏆 Landing Page - Grupo Free Vicente

Landing Page moderna e interativa para captação de leads via quiz, convertida de HTML estático para React + Vite + TypeScript.

## ✨ Características

- ✅ **Quiz Interativo** - 3 perguntas com transições suaves
- ✅ **Animações Fluidas** - Framer Motion para todas as animações
- ✅ **Design Moderno** - Tema dark com gradientes verdes
- ✅ **Totalmente Responsivo** - Mobile-first design
- ✅ **Smooth Scroll** - Rolagem suave com Lenis
- ✅ **TypeScript** - Type-safe em todo o código
- ✅ **Componentes Reutilizáveis** - Arquitetura modular

## 🚀 Tecnologias Utilizadas

- **React 18** + **Vite** - Framework e build tool
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **Framer Motion** - Animações complexas
- **Lenis** - Smooth scrolling
- **Lucide React** - Ícones modernos
- **Sonner** - Sistema de toasts (configurado)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── sections/
│   │   ├── hero-section.tsx          # Tela inicial
│   │   ├── quiz-section.tsx          # Quiz interativo
│   │   ├── result-section.tsx       # Tela de resultado
│   │   ├── vicente-section.tsx      # Sobre o Vicente
│   │   ├── how-it-works-section.tsx  # Como funciona
│   │   ├── results-section.tsx      # Resultados
│   │   ├── faq-section.tsx          # FAQ acordeon
│   │   └── footer.tsx               # Rodapé
│   └── ui/                          # Componentes shadcn-ui
├── config/
│   └── whatsapp.ts                  # Configuração WhatsApp
├── lib/
│   ├── smooth-scroll.tsx            # Smooth scroll
│   └── utils.ts                     # Utilitários
└── App.tsx                          # Componente principal
```

## ⚙️ Configuração

### 1. Configurar Número do WhatsApp

Edite o arquivo `src/config/whatsapp.ts`:

```typescript
export const WHATSAPP_CONFIG = {
  number: '5511999999999', // ⚠️ ALTERE AQUI
  defaultMessage: 'Olá! Quero entrar no grupo Free de análises!',
}
```

**Formato do número:**
- Código do país + DDD + número (sem espaços)
- Exemplo Brasil: `5511999999999` (55 + 11 + 999999999)

## 🎨 Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🚀 Deploy na Vercel

1. Conecte seu repositório na Vercel
2. A Vercel detectará automaticamente o Vite
3. O deploy será feito automaticamente

**Configuração já incluída:**
- ✅ Analytics da Vercel
- ✅ Speed Insights
- ✅ Build otimizado

## 🎯 Funcionalidades

### Quiz Interativo
- 3 perguntas sequenciais
- Barra de progresso visual
- Transições suaves entre perguntas
- Loading animation antes do resultado

### Animações
- Hero section com glow animado
- Fade in/out nas transições
- Hover effects em todos os cards
- Scroll animations (on view)

### Responsividade
- Mobile-first design
- Breakpoints otimizados
- Touch-friendly interactions

## 📝 Personalização

### Cores
As cores principais estão definidas no Tailwind:
- Verde: `green-500`, `green-600`
- Background: `black`, `#0a0a0a`, `#1a1a1a`
- Texto: `white`, `gray-400`

### Conteúdo
- Edite os textos diretamente nos componentes
- FAQ em `src/components/sections/faq-section.tsx`
- Perguntas do quiz em `src/components/sections/quiz-section.tsx`

## 🔧 Próximas Melhorias

- [ ] Analytics de conversão
- [ ] A/B testing
- [ ] Integração com CRM
- [ ] Formulário de captura de email
- [ ] Testes automatizados

---

**Status**: ✅ Pronto para produção!







