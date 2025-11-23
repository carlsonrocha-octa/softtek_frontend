# Configuração de Variáveis de Ambiente

Este documento explica como configurar as variáveis de ambiente para diferentes ambientes de deploy.

## 📋 Variáveis Disponíveis

### VITE_ENVIRONMENT

Define o ambiente de execução da aplicação. Valores possíveis:
- `DEV` (padrão): Ambiente de desenvolvimento
- `PROD`: Ambiente de produção

## 🔧 Configuração por Ambiente

### Desenvolvimento (DEV)

Crie um arquivo `.env.development` na raiz do projeto:

```env
VITE_ENVIRONMENT=DEV
```

**URL do Backend**: `https://localhost:44306/api`

### Produção (PROD)

Crie um arquivo `.env.production` na raiz do projeto:

```env
VITE_ENVIRONMENT=PROD
```

**URL do Backend**: `https://backend.softtek.com.br/api`

## 📝 Como Funciona

1. O Vite carrega automaticamente os arquivos `.env` baseado no modo de execução:
   - `npm run dev` → carrega `.env.development` ou `.env`
   - `npm run build` → carrega `.env.production`

2. A configuração está centralizada em `src/config/environment.ts`

3. O `OrderApiClient` utiliza automaticamente a URL correta baseada no ambiente

## 🚀 Exemplos de Uso

### Desenvolvimento Local

```bash
# Criar arquivo .env.development
echo VITE_ENVIRONMENT=DEV > .env.development

# Executar aplicação
npm run dev
```

### Build para Produção

```bash
# Criar arquivo .env.production
echo VITE_ENVIRONMENT=PROD > .env.production

# Build da aplicação
npm run build
```

## ⚠️ Importante

- Os arquivos `.env` não devem ser commitados no repositório (já estão no `.gitignore`)
- Se nenhuma variável for definida, o ambiente padrão é **DEV**
- Todas as variáveis de ambiente do Vite devem começar com `VITE_` para serem expostas ao código cliente

