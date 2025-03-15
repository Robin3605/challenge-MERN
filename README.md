# Proyecto React, node y MongoDB

## Introducción
Este proyecto es una aplicación que permite gestionar productos, usuarios y precios especiales utilizando **React** para el Frontend, **Node.js** y **Express** para el Backend, y **MongoDB** como base de datos. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las colecciones de productos, usuarios y precios especiales.

Además, el Frontend ofrece una interfaz interactiva donde los usuarios pueden crear productos, usuarios y precios especiales mediante formularios. En el caso de los precios especiales, el usuario puede seleccionar productos y usuarios desde listas desplegables, lo que facilita la creación de relaciones entre ellos sin necesidad de conocer sus IDs.

## Pasos para ejecutar localmente
1. Clona el repositorio.
2. Navega a la carpeta del back y ejecuta `npm install`.
3. Ejecuta el servidor con `npm run dev`.
4. Navega a la carpeta del front y ejecuta `npm install`.
5. Ejecuta la aplicación con `npm run dev`.

## Justificación de elecciones técnicas
### Frontend
- **React**: Elegí React por su flexibilidad, amplia comunidad y facilidad para crear interfaces dinámicas y reactivas.
- **React Router**: Para manejar la navegación entre páginas de manera eficiente.
- **Axios**: Para realizar solicitudes HTTP al Backend de manera sencilla.
- **Formularios Interactivos**: Implementé formularios con listas desplegables para seleccionar usuarios y productos, lo que facilita la creación de precios especiales sin necesidad de conocer los IDs.

### Backend
- **Node.js y Express**: Elegí Node.js por su rendimiento y escalabilidad, y Express por su simplicidad y amplia adopción en la comunidad.
- **MongoDB**: Utilicé MongoDB por su flexibilidad para manejar datos no estructurados y su integración sencilla con Node.js.

## Descripción de la estructura del proyecto back
/backend
  /src
    /config            # configuramos la coneccion con mongoDB          
    /controllers       # Controladores para manejar la lógica de las rutas
    /dao               # establecemos las conecciones con la base de daros para las diferentes operacioneds en esta (CRUD)
    /models            # Modelos de MongoDB
    /routes            # Definición de las rutas de la API        
    app.js             # Punto de entrada del Backend          
  .env               # Variables de entorno


## Descripción de la estructura del proyecto front
/frontend
  /public
  /src
    /components      # Componentes reutilizables (Navbar, UploadForm, etc.)
    /pages           # Páginas de la aplicación (Home, Upload, etc.)
    /services        # Servicios para interactuar con la API
    App.jsx          # Punto de entrada del Frontend
    index.css        # vinculamos taiwind para poder dar los estilos
    main.jsx         # Renderiza la aplicación en el DOM
  .env               # Variable de entorno para la URL de la API
  package.json       # Dependencias del Frontend