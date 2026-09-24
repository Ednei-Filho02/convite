# 💕 Projeto Encontro

Aplicação web interativa desenvolvida para criar um convite personalizado para um encontro.

O projeto foi desenvolvido utilizando **React no frontend** e **Python com FastAPI no backend**, com persistência dos dados em **PostgreSQL**.

## ✨ Funcionalidades

- 💌 Convite interativo para o encontro
- 😈 Botão "Não" que foge quando o usuário tenta clicar
- 📅 Seleção de data e horário
- 👫 Escolha do tipo de encontro
- 📍 Sugestão de lugares para o encontro
- 🍕 Sugestão de opções de comida
- ✏️ Possibilidade de inserir uma opção personalizada
- 📋 Tela de resumo das escolhas
- ❤️ Tela final com animações
- 💾 Salvamento das informações no banco de dados
- 🔄 Comunicação entre frontend e backend através de API REST

## 🛠️ Tecnologias utilizadas

### Frontend

- React
- Vite
- JavaScript
- CSS
- React Router
- Framer Motion

### Backend

- Python
- FastAPI
- SQLAlchemy
- Pydantic

### Banco de dados

- PostgreSQL

### Ferramentas

- Git
- GitHub
- VS Code

## 📁 Estrutura do projeto

```text
projeto-encontro/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   └── ...
│
├── backend/
│   ├── app/
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── models.py
│   │   └── schemas.py
│   └── ...
│
├── .gitignore
└── README.md