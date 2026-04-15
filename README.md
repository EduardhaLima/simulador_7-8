# Simulador Télos - Catálogo de Filmes (Nível #7)

Este projeto é uma API REST desenvolvida em Node.js e Express para o gerenciamento de um catálogo de filmes. O objetivo principal é aplicar fundamentos de Node.js, roteamento, controladores e manipulação de dados em memória (CRUD).

## 🚀 Tecnologias Utilizadas

* **Node.js** (v25.2.0)
* **Express** (Framework Web)
* **Yarn** (Gerenciador de pacotes)
* **Nodemon** (Ambiente de desenvolvimento)

## 📁 Estrutura do Projeto

```text
src/
 ├── controllers/
 │    └── m.controller.js  # Lógica de negócio e CRUD em memória
 ├── routes/
 │    └── m.routes.js      # Definição e separação das rotas
 └── server.js             # Inicialização do servidor Express

```
## 🛠️ Como Executar o Projeto
 1. **Acesse a pasta do projeto:**
   ```bash
   cd simulador-7
   
   ```
 2. **Instale as dependências:**
   ```bash
   yarn install
   
   ```
 3. **Inicie o servidor:**
   ```bash
   yarn dev
   
   ```
   O servidor estará rodando em: http://localhost:3000

## 📡 Endpoints da API

Abaixo estão as rotas disponíveis para teste no **Thunder Client**:
| Método | Endpoint | Descrição |
|---|---|---|
| POST | /movies | Cria um novo filme no catálogo |
| GET | /movies | Lista todos os filmes |
| PUT | /movies/:id | Atualiza um filme pelo ID |
| DELETE | /movies/:id | Remove um filme pelo ID |

### Modelo de Entidade (JSON):
```json
{
  "title": "Inception",
  "description": "Um ladrão que rouba segredos corporativos.",
  "year": 2010,
  "genres": ["Sci-Fi", "Action"],
  "image": "inception.jpg",
  "video": "trailer.mp4"
}

```
## 📋 Critérios de Aceitação (Avaliação)
 * [x] **Controllers e Routes:** Implementação de controladores e rotas em arquivos separados.
 * [x] **CRUD em memória:** Armazenamento de dados em estrutura local (array).
 * [x] **Endpoints obrigatórios:** Funcionamento correto de todas as rotas HTTP.
 * [x] **Organização:** Código estruturado e sem redundâncias de arquivos.
Desenvolvido por Eduardo para o currículo de Fundamentos de APIs REST.
```