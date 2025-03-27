# 🎵 Cópia do Spotify - Full Stack
Este projeto é uma cópia funcional do Spotify, desenvolvido com uma arquitetura Full Stack. Ele inclui frontend e backend, permitindo a reprodução de músicas e navegação entre artistas e faixas.

## 🚀 Tecnologias

### 📌 Backend

Node.js (Servidor backend)

Express (Framework para criação da API)

MongoDB (Banco de dados)

Mongoose (ODM para interagir com MongoDB)

### 🎨 Frontend

React (Biblioteca para construção da interface)

Vite (Ferramenta para desenvolvimento rápido)

CSS (Estilização personalizada)

Autenticação: #ToDo

Implantação: Render


## 📂 Estrutura do Projeto
```
├── back-end
│   ├── api
│   │   ├── connect.js  # Conexão com o banco de dados
│   │   ├── insertMany.js  # Script para inserir dados
│   │   └── server.js  # Servidor Express
│   ├── package.json
│   └── package-lock.json
├── front-end
│   ├── src
│   │   ├── components  # Componentes reutilizáveis (Header, Player, etc.)
│   │   ├── pages  # Páginas principais (Home, Artistas, Músicas)
│   │   ├── assets  # Recursos como imagens e dados
│   │   ├── main.jsx  # Ponto de entrada da aplicação
│   ├── dist  # Build da aplicação
│   ├── vite.config.js  # Configuração do Vite
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
└── package.json
```

## 📦 Funcionalidades
🎧 Reprodução de músicas

📃 Listas de musicas

🎶 Listas de artistas

## 🛠️ Como Rodar
Clonar o repositório
```
git clone https://github.com/stuffalex/copia-spotify-full-stack.git
cd copia-spotify-full-stack
```
### 🔧 Backend
```
# Acesse a pasta backend
cd back-end

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

### 🎨 Frontend

```
# Acesse a pasta frontend
cd front-end

# Instale as dependências
npm install

# Rode a aplicação
npm run dev
```

## 🌍 Deploy
O projeto está disponível em produção: [URL do deploy](https://copia-spotify-full-stack.onrender.com/)

Se precisar de mais detalhes ou ajustes, me avise! 😊
