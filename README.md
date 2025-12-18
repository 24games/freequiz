# 🏆 Landing Page - Vazamento de Dados

Landing Page "Award-Winning" (nível Awwwards) para exibir lista de vazamentos de dados de casas de aposta.

## 🚀 Tecnologias

### Stack Principal
- ✅ **React 18** - Biblioteca UI
- ✅ **Vite** - Build tool e dev server
- ✅ **TypeScript** - Tipagem estática
- ✅ **Tailwind CSS** - Framework CSS utility-first

### Estilo e Arquitetura Visual
- ✅ **tailwindcss-animate** - Animações keyframes
- ✅ **@tailwindcss/typography** - Estilização de textos longos (prose)
- ✅ **class-variance-authority (CVA)** - Variantes de componentes
- ✅ **clsx** + **tailwind-merge** - Fusão inteligente de classes
- ✅ **mini-svg-data-uri** - Backgrounds com padrões geométricos

### Interface e Componentes
- ✅ **shadcn-ui** - Componentes acessíveis (Radix UI)
- ✅ **sonner** - Toasts/notificações
- ✅ **vaul** - Drawers (gavetas mobile)

### Ícones
- ✅ **lucide-react** - Ícones modernos
- ✅ **react-icons** - Biblioteca massiva de ícones

### Fontes
- ✅ **Inter** - Interface geral (UI)
- ✅ **JetBrains Mono** - Dados, números, códigos (estética Hacker/Security)

### Motion e Feel
- ✅ **framer-motion** - Animações complexas
- ✅ **lenis** - Smooth Scrolling

### Integridade de Dados
- ✅ **zod** - Validação de schemas

### Deploy e Analytics
- ✅ **Vercel** - Plataforma de deploy
- ✅ **@vercel/analytics** - Analytics da Vercel
- ✅ **@vercel/speed-insights** - Speed Insights da Vercel

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

Este projeto está configurado para deploy na Vercel:

1. **Conecte seu repositório** na Vercel
2. A Vercel detectará automaticamente o framework Vite
3. **Analytics e Speed Insights** já estão habilitados no código

### Configuração Vercel

O arquivo `vercel.json` está configurado com:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: `vite`

### Analytics e Speed Insights

Os componentes `Analytics` e `SpeedInsights` estão importados em `src/main.tsx` e serão automaticamente habilitados quando o projeto for deployado na Vercel.

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── components/
│   │   └── ui/          # Componentes shadcn-ui
│   ├── lib/
│   │   ├── schemas/     # Schemas Zod
│   │   ├── utils.ts     # Utilitários (cn function)
│   │   └── smooth-scroll.tsx
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Entry point (com Analytics e Speed Insights)
│   └── index.css        # Estilos globais Tailwind
├── index.html
├── vite.config.ts       # Configuração Vite
├── tailwind.config.ts   # Configuração Tailwind
├── tsconfig.json        # Configuração TypeScript
└── vercel.json          # Configuração Vercel
```

## 🎯 Próximos Passos

1. Criar componentes de Card para exibir vazamentos
2. Implementar animações com Framer Motion
3. Criar layout responsivo
4. Adicionar filtros e busca
5. Implementar drawer mobile com Vaul
6. Adicionar toasts com Sonner

## 📝 Schema de Dados

O schema Zod está em `src/lib/schemas/data-breach.ts` e valida:

- `id`: Identificador único
- `name`: Nome da casa de aposta (obrigatório)
- `logo`: URL do logo (obrigatório, deve ser URL válida)
- `description`: Descrição opcional
- `riskLevel`: Nível de risco (low, medium, high, critical)
- `leakedData`: Array de tipos de dados vazados
- `date`: Data do vazamento (ISO datetime)
- `affectedUsers`: Número de usuários afetados (opcional)
- `source`: URL da fonte (opcional)

## 🎨 Uso das Fontes

- **Inter** (`font-sans`): Use para textos de interface
- **JetBrains Mono** (`font-mono`): Use para dados, números, códigos

Exemplo:
```tsx
<p className="font-sans">Texto da interface</p>
<p className="font-mono">Dados técnicos</p>
```

## 🔧 Utilitários

### Função `cn()`

Use para combinar classes Tailwind:

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", condition && "conditional-class")} />
```

### CVA (Class Variance Authority)

Use para criar variantes de componentes:

```tsx
import { cva } from "class-variance-authority"

const cardVariants = cva("base-class", {
  variants: {
    risk: {
      low: "border-green-500",
      high: "border-red-500",
    },
  },
})
```

---

**Status**: ✅ Projeto React + Vite configurado e pronto para deploy na Vercel com Analytics e Speed Insights!
