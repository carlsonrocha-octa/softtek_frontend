# Portal de Pedidos de Insumos - Frontend

Frontend React com TypeScript para o portal de pedidos de insumos de uma grande rede de farmácias.

## 📋 Sobre o Projeto

Este projeto faz parte de uma solução completa que inclui:
- **Backend**: API REST em .NET (C#) rodando em `localhost:5000`
- **Frontend**: Aplicação React com TypeScript rodando em `localhost:3000`

O frontend permite que colaboradores criem pedidos de insumos através de um formulário simples e visualizem o resultado da operação.

## 🏗️ Arquitetura

O projeto segue os princípios de **Clean Architecture** e **SOLID**, organizando o código em três camadas principais:

### Camadas

1. **Domain** (`src/domain/`)
   - Modelos de domínio (interfaces e tipos)
   - Interfaces de repositórios
   - Lógica de negócio pura, sem dependências externas

2. **Data** (`src/data/`)
   - Implementação de repositórios
   - Clientes de API (comunicação HTTP)
   - Acesso a dados e integração com serviços externos

3. **Presentation** (`src/presentation/`)
   - Componentes React
   - Hooks customizados
   - Páginas e rotas
   - Interface do usuário

### Princípios Aplicados

- **Separation of Concerns**: Cada camada tem responsabilidades bem definidas
- **Dependency Inversion**: As camadas superiores dependem de abstrações (interfaces)
- **Single Responsibility**: Cada classe/componente tem uma única responsabilidade
- **Open/Closed**: Fácil extensão sem modificação do código existente

## 🚀 Tecnologias

- **React 18.2.0**: Biblioteca para construção da interface
- **TypeScript 5.2.2**: Tipagem estática
- **Vite 5.0.8**: Build tool e dev server
- **React Router DOM 6.20.0**: Roteamento
- **Axios 1.6.2**: Cliente HTTP para comunicação com a API

## 📦 Instalação

1. Instale as dependências:

```bash
npm install
```

## 🏃 Executando o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

## 🔌 Configuração da API

O projeto está configurado para se comunicar com o backend através de um proxy. O Vite está configurado para redirecionar requisições `/api/*` para `http://localhost:5000/api/*`.

**Importante**: Certifique-se de que o backend está rodando em `localhost:5000` antes de usar o frontend.

## 📄 Rotas

- `/` ou `/test/order`: Página principal com formulário de criação de pedido

## 🧪 Funcionalidades

### Criar Pedido de Insumo

A página `/test/order` contém um formulário com os seguintes campos:

- **Branch ID**: ID da filial (obrigatório)
- **Item ID**: ID do item/insumo (obrigatório)
- **Quantidade**: Quantidade do item (obrigatório, deve ser maior que zero)

Ao submeter o formulário:
1. Uma requisição POST é enviada para `/api/orders`
2. O resultado é exibido na tela (sucesso ou erro)
3. Em caso de sucesso, os detalhes do pedido criado são mostrados

## 📁 Estrutura de Pastas

```
src/
├── domain/              # Camada de domínio
│   ├── models/         # Modelos e interfaces do domínio
│   └── repositories/   # Interfaces de repositórios
├── data/               # Camada de dados
│   ├── clients/        # Clientes de API
│   └── repositories/  # Implementação de repositórios
└── presentation/       # Camada de apresentação
    ├── components/     # Componentes React
    ├── hooks/          # Hooks customizados
    └── pages/          # Páginas da aplicação
```

## 🧩 Componentes Principais

### OrderForm
Componente de formulário para criação de pedidos. Inclui validação de campos e feedback visual.

### OrderResponseDisplay
Componente que exibe o resultado da criação do pedido (sucesso ou erro) com todos os detalhes.

### useCreateOrder
Hook customizado que gerencia o estado e a lógica de criação de pedidos.

## 🔄 Fluxo de Dados

1. Usuário preenche o formulário e submete
2. `OrderForm` chama `handleSubmit` da página
3. `TestOrderPage` usa o hook `useCreateOrder`
4. O hook chama o `OrderRepository`
5. O repositório usa o `OrderApiClient` para fazer a requisição HTTP
6. A resposta é propagada de volta até os componentes
7. `OrderResponseDisplay` exibe o resultado

## 🛠️ Desenvolvimento

### Linting

```bash
npm run lint
```

### Estrutura de Código

- Todos os comentários estão em inglês
- Código segue princípios SOLID e Clean Code
- Componentes são testáveis e desacoplados
- Uso de TypeScript para type safety

## 📝 Notas

- O projeto usa **Vite** como build tool (não Next.js, conforme mencionado no enunciado, mas React puro com Vite para simplicidade)
- A porta padrão é 3000 (configurável no `vite.config.ts`)
- O proxy está configurado para redirecionar `/api/*` para `http://localhost:5000/api/*`

## 🤝 Integração com Backend

O backend deve implementar o seguinte endpoint:

**POST** `/api/orders`

**Request Body:**
```json
{
  "branchId": "string",
  "itemId": "string",
  "quantity": number
}
```

**Response:**
```json
{
  "success": boolean,
  "message": "string",
  "data": {
    "id": "guid",
    "branchId": "string",
    "itemId": "string",
    "quantity": number,
    "createdAt": "datetime",
    "status": "string"
  },
  "errors": ["string"]
}
```

## 📄 Licença

Este projeto foi desenvolvido como parte de um teste técnico.

