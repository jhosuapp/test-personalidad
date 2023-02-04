```
Requerimientos mínimos para el correcto funcionamiento para la instalación
```
Tener instalado npm, mínimo versión 18 de node 
```
# Sigue los siguientes pasos:
```
* Lo primero que debemos de hacer después de descargar y descomprimir el código es ejecutar el siguiente comando:

```
npm install
```
Ese comando descargará todas las dependecias y módulos de node necesarios


* Cuando haya terminado de instalar todos los node_modules, entonces podremos ejecutar el proyecto con el siguiente comando:
El siguiente comando le desplegara el modo desarrollador

```
npm run dev
```
El siguiente comando le desplegara el modo producción, actualmente funciona igual que el dev, sí desea que el modo dev le
genere una vista local con un servidor local debe remover del package.json el "build" dentro del script "dev"
```
npm run build
```
