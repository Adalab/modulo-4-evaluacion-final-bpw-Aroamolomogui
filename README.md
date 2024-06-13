
📝​ Tabla de contenidos
Introducción.
Instalación.
Dependencias necesarias.
Endpoints.
💡​ Introducción
En este repositorio puedes encontrar un proyecto que nos proporciona una API REST para poder emplear una base de datos de los signos lunares, cómo nos afecta y de qué manera debemos utilizarlo a neustro favor. Aquellos usuarios que quieran emplear esta API van a poder consultar hasta el momentos los tres primeros signos del zodiaco, buscar personajes por id, modificar personajes y eliminarlos. Además van a encontrar la opción de que un usuario se registre, y pueda hacer un inicio y un cierre de sesión.

​🔧​ ​​Instalación
Para ejecutar el backend de la API de Moon Sign de manera local, siga los siguientes pasos:

Clona este repositorio en tu local:

git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-Aroamolomogui
Navega hasta el directorio del proyecto:

cd modulo-4-evaluacion-final-bpw-
Instala las dependencias usando npm:

npm install
Configura tu base de datos MySQL y actualiza el archivo con las credenciales de tu base de datos.

Arranca el servidor:

npm run dev
✅Dependencias necesarias
Express.
jsonwebtoken.
bcrypt.
dotenv.
cors.
💻​EndPoints
Obtener todos las lunas
Endpoint: /moon
Method: GET
Obtiene todas las lunas .
Obtener una luna a través de su id
Endpoint: /mood/:id
Method: GET
Obtiene una luna a través de su id.
Añadir un personaje nuevo
Endpoint: /moon/:id
Method: POST
Añade un nuea luna.
Modificar una luna ya existente
Endpoint: /mood/:id
Method: PUT
Actualiza una luna existente 

BorrEliminar una luna
Endpoint: moon/:id
Method: DELETE
Elimina una luna de la base de datos.
