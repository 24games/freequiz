# 🏆 Landing Page - Vazamento de Dados

Landing Page "Award-Winning" (nível Awwwards) para exibir lista de vazamentos de dados de casas de aposta.

## 🚀 Tecnologias

### Estilo e Arquitetura Visual
- ✅ **Tailwind CSS** - Framework base
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

## 📦 Instalação

```bash
npm install
```

## 🎨 Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura do Projeto

```
.
├── app/
│   ├── layout.tsx          # Layout principal com fontes
│   ├── page.tsx            # Página inicial
│   ├── providers.tsx       # Providers (Sonner, etc)
│   └── globals.css         # Estilos globais Tailwind
├── components/
│   └── ui/                 # Componentes shadcn-ui
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   ├── utils.ts            # Utilitários (cn function)
│   ├── schemas/            # Schemas Zod
│   │   └── data-breach.ts
│   └── smooth-scroll.tsx   # Smooth scroll com Lenis
└── tailwind.config.ts       # Configuração Tailwind
```

## 🎯 Próximos Passos

1. Criar componentes de Card para exibir vazamentos
2. Implementar animações com Framer Motion
3. Criar layout responsivo
4. Adicionar filtros e busca
5. Implementar drawer mobile com Vaul
6. Adicionar toasts com Sonner

## 📝 Schema de Dados

O schema Zod está em `lib/schemas/data-breach.ts` e valida:

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

**Status**: ✅ Projeto inicializado e configurado com todas as dependências!

