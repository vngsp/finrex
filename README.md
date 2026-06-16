# Finrex 📊💰

Um aplicativo de controle financeiro pessoal para gerenciar receitas, despesas, metas e insights financeiros.

## 🚀 Tecnologias

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4, MUI v7
- **Data Fetching**: TanStack Query v5
- **Formulários**: React Hook Form + Zod v4
- **Gráficos**: Chart.js
- **HTTP Client**: Axios
- **Calendário**: FullCalendar
- **Linting/Formatação**: Biome

## 🛠️ Como Começar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Iniciar servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Iniciar servidor de produção |
| `npm run lint` | Verificação ESLint |
| `npm run biome:check` | Verificação Biome (lint + format) |
| `npx biome format --write .` | Auto-formatar todos os arquivos |

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── (auth)/login/     # Páginas de autenticação
│   ├── (app)/             # Páginas protegidas com Header
│   │   ├── insights/      # Visão geral financeira e gráficos
│   │   ├── revenue/       # Controle de receitas e despesas
│   │   ├── goals/         # Gerenciamento de metas financeiras
│   │   ├── profit/        # Análise de lucro/prejuízo
│   │   └── profile/       # Perfil do usuário
│   └── layout.tsx         # Layout raiz
├── features/              # Módulos de funcionalidades
│   ├── auth/              # Login e autenticação
│   ├── insights/          # Gráficos, calendário e visualizações
│   ├── revenue/           # Formulários e dados de receita
│   ├── goals/             # Componentes de metas
│   ├── profit/            # Componentes de lucro
│   └── profile/           # Formulários de perfil
├── shared/                # Recursos compartilhados
│   ├── components/        # Header, Summary, TitleAndSubtitle
│   ├── providers/         # QueryClient, Providers
│   └── contexts/          # ProfilePicContext
├── api/                   # Instância Axios e tratamento de erros
├── libs/                  # Theme e paths
└── types/                 # Definições TypeScript
```

## ✨ Funcionalidades

- 🔐 **Autenticação**: Sistema de login com sessão baseada em cookie
- 📊 **Insights**: Visão geral financeira com gráficos interativos (barras, linhas, pizza) e calendário
- 💵 **Receitas**: Controle de fontes de renda e categorias de despesas
- 🎯 **Metas**: Criar, editar e monitorar metas financeiras com acompanhamento de progresso
- 📈 **Lucros**: Análise detalhada de lucro/prejuízo com breakdowns mensais
- 👤 **Perfil**: Gerenciamento de dados pessoais do usuário

## 🏗️ Arquitetura

### Grupos de Rotas

- `(auth)/login/` — Rotas não autenticadas (página de login)
- `(app)/` — Rotas protegidas com layout compartilhado do `Header`

### Fluxo de Autenticação

O app usa autenticação baseada em cookie via `src/middleware.ts`:
- Verifica o cookie `finrex.auth`
- Redireciona usuários não autenticados para `/login`
- Token também armazenado no `localStorage` para acesso no cliente

### Fluxo de Dados

1. Todas as chamadas de API usam a instância axios em `src/api/api.ts`
2. Tratamento de erros via `handleError` em `src/api/services/errorHandler.ts`
3. Mutations usam TanStack Query's `useMutation` definidas no `utils/mutations.ts` de cada feature

### Validação de Formulários

Usa `react-hook-form` + `zod/v4`:
```ts
import * as z from 'zod/v4'
```

## 📋 Convenções do Projeto

- **Aliases de caminho**: `@/*` aponta para `src/*`
- **Importação de SVG**: Arquivos importados como componentes React via `@svgr/webpack`
- **Estado global**: `QueryClient` em `src/shared/providers/queryClient.ts`
- **Wrapper de Providers**: `src/shared/providers/providers.tsx` (ThemeProvider, QueryClientProvider, ProfilePicProvider)
- **Formatação**: Biome usa tabs para indentação e aspas simples para strings

## 🎨 Tema MUI

Tema customizado em `src/libs/theme.ts` estende a paleta MUI com:
- `theme.palette.yellow.main`
- `theme.palette.purple.main`
- `theme.palette.orange.main`

## 🔄 Contextos

| Contexto | Propósito |
|----------|-----------|
| `ProfilePicContext` | URL global da foto de perfil |
| `AlertErrorContext` | Exibição global de mensagens de erro |
| `CalendarContext` | Alternância de visibilidade do calendário |
| `GraphContext` | Gerenciamento de estado dos dados do gráfico |

## 🔧 Variáveis de Ambiente

Defina `NEXT_PUBLIC_URL_FINREX_API` para apontar para sua API backend.

## 📚 Learn More

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação MUI](https://mui.com/material-ui/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Biome](https://biomejs.dev/)

