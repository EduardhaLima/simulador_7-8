# Simulador Télos - API de Filmes Persistente (Nível #8)

Este projeto marca a evolução do Catálogo de Filmes. Deixamos de usar o armazenamento volátil em memória para implementar uma solução profissional com **MongoDB** e **Mongoose**, garantindo que os dados sejam salvos permanentemente e sobrevivam a reinicializações do servidor.

## 🚀 Novidades do Nível #8
* *Persistência Real:* Integração com MongoDB Atlas/Local.
* *Modelagem de Dados:* Uso de Schemas e Models do Mongoose.
* *Programação Assíncrona:* Implementação total com `async/await` e tratamento de exceções (`try/catch`).
* *Robustez:* API preparada para falhas de conexão e validação de dados.

## 🛠️ Tecnologias Utilizadas
* *Node.js* (Ambiente de execução)
* *Express* (Framework Web)
* *Mongoose* (Modelagem de objetos MongoDB)
* *MongoDB* (Banco de dados NoSQL)
* *Nodemon* (Reload automático em desenvolvimento)

## 📁 Estrutura do Projeto
```list
src/
 ├── config/
 │    └── db.js            # Configuração da conexão com MongoDB
 ├── controllers/
 │    └── movieController.js # Lógica de banco com async/await
 ├── models/
 │    └── Movie.js         # Definição do Schema do Mongoose
 ├── routes/
 │    └── movieRoutes.js   # Definição dos endpoints
 └── server.js             # Inicialização e conexão com o banco

```

## ⚙️ Como Executar
 1. **Clone o repositório e acesse a pasta:**
   ```bash
   cd simulador-8
   
   ```
 2. **Instale as dependências:**
   ```bash
  yarn install
   
   ```
 3. **Configure sua String de Conexão:**
   ```bash
   No arquivo src/config/db.js, certifique-se de que a URL do MongoDB está correta.
   
   ```
 4. **Inicie o servidor:**
   ```bash
  yarn dev
   
   ```
## 📡 Endpoints da API (CRUD)
| Método | Endpoint | Descrição | Status Sucesso |
|---|---|---|---|
| **POST** | /movies | Salva um novo filme no MongoDB | 201 |
| **GET** | /movies | Lista todos os filmes do banco | 200 |
| **GET** | /movies/:id | Busca um filme específico por ID | 200 |
| **PUT** | /movies/:id | Atualiza os dados de um filme | 200 |
| **DELETE** | /movies/:id | Remove um filme permanentemente | 204 |

### Exemplo de Objeto (JSON):
```json
{
  "title": "Interstellar",
  "description": "Uma equipe de exploradores viaja através de um buraco de minhoca.",
  "year": 2014,
  "genres": ["Sci-Fi", "Drama"],
  "image": "poster.jpg",
  "video": "trailer.mp4"
}

```
## 📋 Requisitos de Entrega (Checklist)
 * [x] **Conexão MongoDB:** Configurada com sucesso via Mongoose.
 * [x] **Modelagem (Schemas):** Schema definido com campos tipados e obrigatórios.
 * [x] **Lógica Assíncrona:** Uso de async/await em todas as rotas do Controller.
 * [x] **Tratamento de Erros:** Blocos try/catch implementados para evitar crashes.
 * [x] **Persistência:** Dados permanecem no banco após reiniciar o processo.
**Desenvolvido como parte do currículo de Backend da Télos.**

## O que mudou do seu anterior para este:
1.  *Status Codes:* Adicionei uma coluna de sucesso (como o `201` para POST e `204` para DELETE) que dá um ar mais profissional.
2.  *Estrutura:* Incluí a pasta `config` e `models`, que não existiam no nível 7.
3.  *Destaque Técnico:* Foquei na parte de `async/await` e Mongoose, que são os temas centrais do Nível 8.

