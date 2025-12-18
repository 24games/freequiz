# 🏆 Landing Page - Vazamento de Dados

Landing Page "Award-Winning" (nível Awwwards) para exibir lista de vazamentos de dados de casas de aposta.

## ✅ Setup Completo

Todas as bibliotecas foram instaladas e configuradas conforme solicitado:

### 1. ESTILO E ARQUITETURA VISUAL ✅
- ✅ **Tailwind CSS** v3.4.1 - Framework base
- ✅ **tailwindcss-animate** - Animações keyframes
- ✅ **@tailwindcss/typography** - Estilização de textos (prose)
- ✅ **class-variance-authority (CVA)** - Variantes de componentes
- ✅ **clsx** + **tailwind-merge** - Fusão inteligente de classes
- ✅ **mini-svg-data-uri** - Backgrounds com padrões geométricos

### 2. INTERFACE E COMPONENTES ✅
- ✅ **shadcn-ui** - Componentes acessíveis (Radix UI)
- ✅ **sonner** - Toasts/notificações
- ✅ **vaul** - Drawers (gavetas mobile)

### 3. ÍCONES ✅
- ✅ **lucide-react** - Ícones modernos
- ✅ **react-icons** - Biblioteca massiva de ícones

### 4. FONTES E TIPOGRAFIA ✅
- ✅ **Inter** - Interface geral (via Google Fonts)
- ✅ **JetBrains Mono** - Dados, números, códigos (via Google Fonts)

### 5. MOTION E FEEL ✅
- ✅ **framer-motion** - Animações complexas
- ✅ **lenis** - Smooth Scrolling

### 6. INTEGRIDADE DE DADOS ✅
- ✅ **zod** - Validação de schemas

### 7. DEPLOY E ANALYTICS ✅
- ✅ **Vercel** - Plataforma de deploy
- ✅ **@vercel/analytics** - Analytics
- ✅ **@vercel/speed-insights** - Speed Insights

## 📦 Instalação

```bash
npm install
```

## 🎨 Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

## 🚀 Deploy na Vercel

O projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório na Vercel
2. A Vercel detectará automaticamente o framework Vite
3. Analytics e Speed Insights serão habilitados automaticamente

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes shadcn-ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── toast-example.tsx
│   │   │   └── drawer-example.tsx
│   │   └── data-breach-card.tsx  # Card com CVA
│   ├── lib/
│   │   ├── schemas/         # Schemas Zod
│   │   │   └── data-breach.ts
│   │   ├── examples/        # Exemplos de dados
│   │   ├── utils.ts         # Utilitários (cn function)
│   │   ├── fonts.ts         # Configuração de fontes
│   │   ├── background-patterns.ts  # Padrões SVG
│   │   └── smooth-scroll.tsx
│   ├── App.tsx
│   ├── main.tsx            # Entry point (com Analytics)
│   └── index.css           # Estilos globais Tailwind
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── vercel.json
```

## 🎯 Exemplos de Uso

### CVA (Variantes de Componentes)
```tsx
import { DataBreachCard } from '@/components/data-breach-card'

<DataBreachCard breach={data} riskLevel="critical" />
```

### Sonner (Toasts)
```tsx
import { toast } from 'sonner'

toast.success('Link copiado!')
```

### Vaul (Drawers)
```tsx
import { DrawerExample } from '@/components/ui/drawer-example'

<DrawerExample />
```

### Background Patterns
```tsx
import { useBackgroundPattern } from '@/lib/background-patterns'

<div style={useBackgroundPattern('grid')}>Conteúdo</div>
```

### Framer Motion
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Conteúdo animado
</motion.div>
```

### Validação Zod
```tsx
import { dataBreachSchema } from '@/lib/schemas/data-breach'

const validated = dataBreachSchema.parse(rawData)
```

## 📝 Documentação Completa

Consulte `SETUP_COMPLETO.md` para documentação detalhada de todas as funcionalidades.

---

**Status**: ✅ Setup 100% completo e pronto para desenvolvimento!
