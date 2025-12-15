# 🏗️ Site Natlou

Bem-vindo ao repositório do site institucional e e-commerce da **Natlou**. Este projeto foi desenvolvido para apresentar os serviços, história e produtos da empresa, com foco em uma experiência de usuário moderna, fluida e visualmente impactante.

## 🚀 Funcionalidades Principais

O site está estruturado em páginas principais que cobrem todas as áreas de atuação da Natlou:

### 🏠 Home (`/`)
- **Hero Section**: Banner principal com vídeo/imagem de destaque e chamada para ação (CTA).
- **Destaques**: Apresentação rápida dos diferenciais da empresa.
- **Integração WhatsApp**: Botão flutuante para contato rápido e links diretos para orçamentos.

### 🛠️ Serviços (`/services`)
- **Catálogo de Serviços**: Detalhes sobre Instalação, Manutenção e Reparação.
- **Tabela de Preços**: Visualização clara dos custos estimados.
- **Cards Interativos**: "Flip cards" para uma experiência de navegação dinâmica.

### 🛒 Loja (`/shop`)
- **Vitrine de Produtos**: Exibição de ar-condicionados e equipamentos.
- **Detalhes do Produto**: Informações técnicas e visualização de imagens.
- **CTA de Compra**: Botões para encomendar diretamente via WhatsApp.

### 🏢 Quem Somos (`/about`)
- **História**: Narrativa sobre a trajetória da Natlou.
- **Missão, Visão e Valores**: Apresentação interativa dos pilares da empresa.
- **Equipe e Infraestrutura**: Destaque para a capacidade técnica e logística.

### 📞 Contactos (`/contact`)
- **Informações de Contato**: Telefone, E-mail e Endereço.
- **Mapa**: Localização integrada (Zango II).

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza um stack moderno e robusto:

- **[Next.js 16](https://nextjs.org/)** (App Router)
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **CSS Modules / Vanilla CSS** (`globals.css`, `animations.css`) para estilização personalizada e animações.

## ⚙️ Como Executar o Projeto

1. **Instalar Dependências**:
    Certifique-se de ter o Node.js instalado.
   ```bash
   npm install
   ```

2. **Rodar o Servidor de Desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

3. **Build para Produção**:
   ```bash
   npm run build
   npm start
   ```

## 📂 Estrutura de Pastas

A estrutura principal dentro de `src/app` segue o padrão de roteamento do Next.js:

```
src/
└── app/
    ├── about/       # Página Quem Somos
    ├── contact/     # Página de Contactos
    ├── services/    # Página de Serviços
    ├── shop/        # Página da Loja Online
    ├── layout.tsx   # Layout principal (Navbar, Footer)
    ├── page.tsx     # Página Inicial (Home)
    ├── loading.tsx  # Componente de carregamento
    └── globals.css  # Estilos globais
```

## 📱 Integração WhatsApp

O site possui integração estratégica com o WhatsApp para facilitar o atendimento. Para detalhes sobre a configuração e estratégia de links do WhatsApp, consulte o arquivo [`WHATSAPP_BUSINESS_SETUP.md`](./WHATSAPP_BUSINESS_SETUP.md).

---
Desenvolvido por **Cas Maravilha** para **Natlou**.
📧 Email: casmaravilha@gmail.com
📞 Contacto: +244 923 066 033
