# <img src="public/image/logo_instagram.png" alt="Instagram Clone" width="32" height="32"> Clone Instagram

Um clone da página de login do Instagram desenvolvido com React + TypeScript + Vite, focado na reprodução fiel da interface e experiência do usuário.

## 📋 Sobre o Projeto

Este projeto é uma replicação da página de login do Instagram, desenvolvida para fins de estudo e demonstração de habilidades em desenvolvimento front-end. O projeto reproduz fielmente a interface visual da página oficial do Instagram, incluindo:

- **Layout responsivo** idêntico ao Instagram original
- **Formulário de login** com campos para usuário/email e senha
- **Integração com Facebook** (visual)
- **Links de download** para App Store e Google Play
- **Rodapé completo** com todos os links originais
- **Design pixel-perfect** usando CSS Modules

## 🚀 Demonstração

Acesse a versão online: [Instagram Clone](https://cloneinstaproject.netlify.app/)

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca principal para componentes
- **TypeScript** - Tipagem estática
- **Vite** - Bundler e servidor de desenvolvimento
- **CSS Modules** - Estilização com módulos CSS
- **ESLint** - Análise de código
- **Netlify** - Hospedagem e deploy

## 📦 Estrutura do Projeto

```
instagram/
├── public/
│   └── image/          # Imagens do projeto
│       ├── logo_instagram.png
│       ├── logo_facebook.svg
│       ├── banner1.png, banner2.png
│       ├── apple_btn.png, gplay_btn.png
│       └── favicon.png
├── src/
│   ├── components/
│   │   └── Main/
│   │       ├── Home.tsx           # Componente principal
│   │       └── Styles.module.css  # Estilos CSS Modules
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── README.md
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd cloneInstagram/instagram
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa análise de código com ESLint

## 🌐 Deploy

O projeto está configurado para deploy no Netlify através do arquivo `netlify.toml`. A configuração automatiza:

- Build baseado na pasta `instagram`
- Comandos de build: `npm ci && npm run build`
- Redirecionamentos para SPA (Single Page Application)

## 📱 Funcionalidades

### ✅ Implementadas

- [x] Interface de login idêntica ao Instagram
- [x] Formulário de login responsivo
- [x] Integração visual com Facebook
- [x] Links para download de aplicativos
- [x] Rodapé completo com links de navegação
- [x] Design responsivo para mobile e desktop
- [x] Otimização de imagens
- [x] Configuração de deploy para Netlify

### 🔄 Pontos de Melhoria

- [ ] Funcionalidade de login real com API
- [ ] Validação de formulários
- [ ] Implementação de estado global (Redux/Context)
- [ ] Testes unitários
- [ ] Funcionalidade de cadastro
- [ ] Recuperação de senha

## 📸 Imagens do Projeto

O projeto inclui todas as imagens necessárias para reproduzir fielmente a interface do Instagram:

- Logo do Instagram
- Logo do Facebook
- Banners promocionais
- Botões de download para App Store e Google Play
- Favicon personalizado

## 🎨 Design e UX

O projeto mantém fidelidade total ao design original do Instagram:

- **Cores**: Gradientes e cores oficiais do Instagram
- **Tipografia**: Fontes similares às originais
- **Espaçamento**: Layout pixel-perfect
- **Interações**: Hover effects e estados visuais
- **Responsividade**: Adaptação para diferentes tamanhos de tela

## 📝 Notas Importantes

- Este é um projeto puramente educacional e de demonstração
- Não há conexão real com os serviços do Instagram/Facebook
- O formulário é apenas visual (sem backend)
- As imagens são reproduções para fins educacionais

## 📜 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

## 👨‍💻 Autor

**Richard Moraes Souza**
- GitHub: [@richardmoraessouza](https://github.com/richardmoraessouza)
- LinkedIn: [Richard Moraes Souza](https://www.linkedin.com/in/richard-moraes-souza/)

---

⭐ Se você gostou do projeto, deixe uma estrela! ⭐