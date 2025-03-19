<!--
PROJECT NAME
-->

# Lit Login with Prisma
<a id="readme-top"></a>

<!--
PROJECT DESCRIPTION
-->
## 📜 Descripción

Este repositorio tiene como objetivo presentar un ejemplo base de un login con lit elements conectado a un backend en express utilizando un ORM de Prisma


## ✨ Características

- FrontEnd
- Backend

## 🚀 Instalación y Ejecución

### Lit App

1. Clona este repositorio e instala las dependencias:

    ```bash
    git clone https://github.com/locano/lit-login-with-prisma.git
    cd lit-login-with-prisma/lit-app
    npm install
    ```

2. Configura las variables de entorno en un archivo `.env` en la raíz del proyecto:

    ```bash
    # Configuración de la aplicación Lit
    API_URL=<URL de la API>
    ```

3. Ejecuta la aplicación en modo desarrollo:

    ```bash
    npm run dev
    ```

4. Accede a la aplicación en <http://localhost:5143>.

### Express App

1. Navega al directorio de la aplicación Express e instala las dependencias:

    ```bash
    cd ../express-app
    npm install
    ```

2. Configura las variables de entorno en un archivo `.env` en la raíz del proyecto:

    ```bash
    # Conexión con Prisma
    DATABASE_URL=<URL de la base de datos>
    # Secret para JWT
    JWT_SECRET=<Texto o llave para secret>
    ```

3. Levanta Prisma:

    ```bash
    npx prisma migrate dev --name init
    npx prisma generate
    npx run queries
    ```

4. Ejecuta la aplicación en modo desarrollo:

    ```bash
    npm run dev
    ```

5. Accede a la aplicación en <http://localhost:3000>.

## 📦 Dependencias Principales

Las principales dependencias del proyecto incluyen:
* [![Node][Node.js]][Node-url]
* [![Lit][Lit]][Lit-url]
* [![Prisma][Prisma]][Prisma-url]
- [Material Web](https://material-web.dev/components/text-field/): HTML Components .

Para más detalles, puedes consultar el archivo `package.json`.
<p align="right">(<a href="#readme-top">Ir al inicio</a>)</p>

## 🛠️ API Endpoints
<details>
  <summary>Principales Endpoints</summary>
  
  La API está construida utilizando Express.js y organiza sus endpoints en función de las entidades principales del sistema.
  A continuación se presentan algunos de los endpoints más importantes:

- **/login**: Manejo de autenticación y autorización de usuarios.
- **/perfil**: Endpoints para obtener información del usuario.

Cada endpoint está diseñado para recibir y responder con datos JSON, permitiendo la integración con los módulos del sistema.

</details>
<p align="right">(<a href="#readme-top">Ir al inicio</a>)</p>


## 👥 Contribuciones
Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:
1. Realiza un fork del repositorio.
2.	Crea una nueva rama para tu funcionalidad (git checkout -b feature/nueva-funcionalidad).
3.	Haz commit de tus cambios (git commit -m 'Añadir nueva funcionalidad').
4.	Haz push a la rama (git push origin feature/nueva-funcionalidad).
5.	Abre un Pull Request.

### Developer's

<a href="https://github.com/locano">
  <img width='75' src="https://avatars.githubusercontent.com/u/16949087?v=4" alt="Ludwing Cano" />
</a>

* [![Linkedin][Linkedin]][Linkedin-lud]
* [![GitHub][GitHub]][GitHub-lud]

<p align="right">(<a href="#readme-top">Ir al inicio</a>)</p>

## 📞 Contacto
Si tienes preguntas o comentarios, puedes contactarnos a traves de nuestras redes sociales:

* [![Instagram][Instagram]][Instagram-url]
* [![Website][Website]][Website-url]

<p align="right">(<a href="#readme-top">Ir al inicio</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[Lit]: https://img.shields.io/badge/Lit-324FFF?logo=lit&logoColor=fff&style=flat
[Lit-url]: https://lit.dev/
[Prisma]: https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=fff&style=flat
[Prisma-url]: https://www.prisma.io/express
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[Instagram]: https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white
[Instagram-url]: https://www.instagram.com/ludwing238/
[Website]: https://img.shields.io/website?url=https://lc2tech.com/
[Website-url]: https://lc2tech.com/
[Linkedin-lud]: https://www.linkedin.com/in/ludwing-cano238
[Linkedin]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[Github-lud]: https://github.com/locano
[GitHub]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white