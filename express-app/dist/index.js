"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send(`
  <html>
      <head>
          <title>API Routes</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              h1 {
                  color: #333;
              }
              ul {
                  list-style-type: none;
                  padding: 0;
              }
              li {
                  margin: 10px 0;
              }
              a {
                  text-decoration: none;
                  color: #007BFF;
                  font-weight: bold;
              }
              a:hover {
                  text-decoration: underline;
              }
              .container {
                  max-width: 800px;
                  margin: 0 auto;
                  background: #fff;
                  padding: 20px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  border-radius: 8px;
              }
              .description {
                  color: #555;
                  font-size: 14px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>API Routes</h1>
              <ul>
                  <li>
                      <a href="/posts">GET /posts</a>
                      <p class="description">Fetches all posts from the database.</p>
                  </li>
                  <li>
                      <a href="/post">POST /post</a>
                      <p class="description">Creates a new post. Expects a JSON body with the following fields: 
                      <code>
                          <pre style="color: #d32baf;">
{
  "titulo": "string",
  "descripcion": "string",
  "imagen": "string",
  "fecha": "string",
  "categoria": "string"
}
                          </pre>  
                      </code>
                      </p>
                  </li>
              </ul>
          </div>
      </body>
  </html>
  `);
});
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
