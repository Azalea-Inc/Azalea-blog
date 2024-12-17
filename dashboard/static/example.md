# Cómo Funciona Docker: Una Introducción

Docker es una plataforma de contenedores que permite empaquetar, distribuir y ejecutar aplicaciones de manera consistente en diferentes entornos. En este post, exploraremos cómo funciona Docker, sus componentes principales y cómo se utiliza en el desarrollo de software.

![Logo Docker](https://blog.codewithdan.com/wp-content/uploads/2023/06/Docker-Logo.png)

## ¿Qué es Docker?

Docker es una herramienta que utiliza contenedores para ejecutar aplicaciones. Un contenedor es una unidad ligera y ejecutable que incluye todo lo necesario para que una aplicación funcione, como el código, las bibliotecas y las dependencias. Esto garantiza que la aplicación se ejecute de la misma manera en cualquier entorno, ya sea en tu computadora local, en un servidor o en la nube.

### Contenedor vs Máquina Virtual

Aunque tanto los contenedores como las máquinas virtuales (VM) se utilizan para aislar aplicaciones y sus entornos, existen diferencias clave:

- **Contenedores**: Son ligeros, comparten el mismo sistema operativo y el kernel del host, lo que los hace mucho más eficientes en términos de recursos.
- **Máquinas Virtuales**: Cada VM tiene su propio sistema operativo completo, lo que requiere más recursos y tiempo para iniciarse.

## Componentes Clave de Docker

### 1. **Docker Engine**

El Docker Engine es el componente principal de Docker. Es un motor de contenedores que permite crear, ejecutar y gestionar contenedores. El engine se divide en dos partes principales:

- **Docker Daemon**: Es el servicio que corre en segundo plano en tu máquina, gestionando la creación, ejecución y detención de contenedores.
- **Docker CLI (Interfaz de Línea de Comandos)**: Es la herramienta de línea de comandos que interactúa con el Docker Daemon para ejecutar comandos como `docker run`, `docker build` y `docker pull`.

### 2. **Contenedores**

Los contenedores son instancias en ejecución de imágenes de Docker. Un contenedor es una unidad aislada que ejecuta una aplicación y sus dependencias. Los contenedores son muy rápidos de crear y eliminar debido a que comparten el sistema operativo con el host.

### 3. **Imágenes Docker**

Las imágenes Docker son plantillas de solo lectura que contienen el código, las bibliotecas y las configuraciones necesarias para ejecutar una aplicación. Las imágenes pueden ser creadas desde un archivo especial llamado `Dockerfile`, que define el proceso para construir la imagen.

### 4. **Docker Hub**

Docker Hub es un registro público donde puedes encontrar y compartir imágenes Docker. Puedes subir tus propias imágenes o usar imágenes de otras personas para ejecutar aplicaciones populares como bases de datos, servidores web, y más.

## Flujo de Trabajo Básico en Docker

1. **Crear una Imagen**: Primero, creas una imagen de Docker que contenga todo lo necesario para tu aplicación, usando un `Dockerfile`.
2. **Construir la Imagen**: Usas el comando `docker build` para construir una imagen a partir de tu `Dockerfile`.
3. **Ejecutar un Contenedor**: Una vez que la imagen está construida, puedes usar `docker run` para ejecutar un contenedor basado en esa imagen.
4. **Gestionar Contenedores**: Puedes listar los contenedores en ejecución con `docker ps`, detenerlos con `docker stop`, y eliminarlos con `docker rm`.

## Ejemplo Práctico

A continuación, se muestra un ejemplo básico de cómo crear una imagen de Docker para una aplicación Node.js:

### 1. Crear un `Dockerfile`

```dockerfile
# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json
COPY package.json .

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Iniciar la aplicación
CMD ["node", "app.js"]
