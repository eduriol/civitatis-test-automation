# Automatización de pruebas funcionales para Civitatis
Este repositorio consiste en una serie de especificaciones funcionales ejecutables como pruebas funcionales automatizadas mediante [Cucumber](https://cucumber.io/) y [WebdriverIO](http://webdriver.io/) para la web de actividades turísticas civitatis.com.

## Instalación
En primer lugar se necesita tener [Node.js](https://nodejs.org/) instalado. Una vez que se tiene, para instalar los tests, simplemente seguir los siguientes pasos:
```
$ git clone https://github.com/eduriol/civitatis-test-automation.git
$ cd civitatis-test-automation
$ npm install
```
## Ejecución
Para ejecutar los tests, necesitarás tener una instancia de Selenium standalone server ejecutándose localmente. Tras ello, simplemente se debe ejecutar el siguiente comando:
```
$ ./node_modules/.bin/wdio
```
