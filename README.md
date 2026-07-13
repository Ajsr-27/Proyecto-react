🐱 Neko Store

E-commerce desarrollado como proyecto de práctica en el marco de un curso de React. Permite navegar un catálogo de productos, agregarlos al carrito, gestionar productos y cupones desde un panel de administración, y autenticarse mediante Firebase.

📋 Índice


Tecnologías
Características
Estructura del proyecto
Requisitos previos
Instalación
Variables de entorno
Configuración de Firebase
Scripts disponibles
⚠️ Antes de deployar


🚀 Tecnologías


React — librería para construir la interfaz
Vite — bundler y servidor de desarrollo
Tailwind CSS v4 — estilos utility-first
React Router — ruteo entre vistas
Firebase (Firestore + Authentication) — base de datos y autenticación de usuarios
Imgbb API — hosting de imágenes de productos


✨ Características


Catálogo de productos consumido desde Firestore
Carrito de compras (Context API) con badge de cantidad en el navbar
Login y registro de usuarios con Firebase Authentication
Rutas protegidas según rol de usuario (admin / usuario común)
Panel de administración:

Alta, edición y baja de productos (con carga de imagen a Imgbb)
Alta y baja de cupones de descuento



Diseño responsive (mobile / tablet / desktop)


📁 Estructura del proyecto

neko-store/
├── public/
│   ├── Neko_logo.png
│   └── Equipo/              
├── src/
│   ├── Componentes/
│   │   ├── layout/           # Header, Footer, Layout
│   │   ├── NavBar/           # NavBar
│   │   ├── Login/            # Login, Registro
│   │   ├── Inicio/           # Inicio
│   │   ├── Items/            # ItemListContainer
│   │   ├── Carrito/          # Cart
│   │   ├── Boton/            # AgregarCarrito
│   │   ├── Formulario/       # FormularioProducto
│   │   ├── GestionProductos/ # GestionProductos
│   │   ├── GestionCupones/   # GestionCupones
│   │   ├── ProductosBD/      # ProduBD (catálogo)
│   │   ├── Capitalice/       # Formato.js (utilidades)
│   │   └── ProtectedRoute/   # ProtectedRoute
│   ├── Context/
│   │   ├── CartContext.jsx
│   │   └── AuthContext.jsx
│   ├── firebase/
│   │   └── Config.js         
│   ├── App.jsx
│   └── main.jsx
├── .env                       
├── vite.config.js
├── package.json
└── README.md


La estructura exacta de carpetas puede variar según cómo la hayas organizado vos; ajustá el árbol de arriba si es necesario.



✅ Requisitos previos


Node.js v18 o superior
npm (viene con Node) o yarn/pnpm
Una cuenta de Firebase con un proyecto creado
Una cuenta de Imgbb para obtener una API key


🔧 Instalación


Cloná el repositorio:


bash   git clone https://github.com/tu-usuario/neko-store.git
   cd neko-store


Instalá las dependencias:


bash   npm install


Creá el archivo .env en la raíz del proyecto (ver sección siguiente).
Iniciá el servidor de desarrollo:


bash   npm run dev


Abrí http://localhost:5173 en el navegador.


🔑 Variables de entorno

Creá un archivo .env en la raíz del proyecto con las siguientes variables (todas deben empezar con VITE_ para que Vite las exponga en el código):

env# Firebase
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id

# Imgbb
VITE_IMGBB_API_KEY=tu_api_key_de_imgbb


Revisá tu archivo src/firebase/Config.js para confirmar que los nombres de estas variables coinciden con los que usás ahí (import.meta.env.VITE_...).



⚠️ El archivo .env no debe subirse al repositorio. Verificá que .env esté incluido en tu .gitignore (Vite lo agrega por defecto).

🔥 Configuración de Firebase


En la consola de Firebase, creá un proyecto (o usá el existente).
Activá Authentication → método de Email/Contraseña.
Activá Firestore Database y creá las colecciones:

productos (campos: id, nombre, precio, stock, imagen)
cupones (campos: codigo, descuento)
usuarios (o donde guardes el rol admin / usuario)



Configurá las reglas de seguridad de Firestore para permitir lectura pública del catálogo pero restringir escritura solo a usuarios con rol admin.
Copiá las credenciales del proyecto (Configuración del proyecto → tus apps → SDK config) a tu .env.


📜 Scripts disponibles

bashnpm run dev       # levanta el servidor de desarrollo
npm run build     # genera la build de producción en /dist
npm run preview   # sirve localmente la build de producción
npm run lint      # corre el linter (si está configurado)