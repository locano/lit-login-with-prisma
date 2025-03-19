import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.get('/', (req: Request, res: Response) => {

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
                      <a href="/login">POST /login</a>
                      <p class="description">Logs in a user. Expects a JSON body with the following fields: 
                      <code>
                          <pre style="color: #d32baf;">
{
  "email": "string",
  "password": "string",
}
                          </pre>  
                      </code>
                      </p>
                  </li>
                  <li>
                      <a href="/perfil">GET /perfil</a>
                      <p class="description">Gets the user's profile. Expects a Bearer token in the Authorization header.</p>: 
                     
                      </p>
                  </li>
              </ul>
          </div>
      </body>
  </html>
  `);
}
);

app.use(routes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
