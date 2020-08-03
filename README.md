# Richard Lasso - Prueba code-labs

> Marletti website

## Repositorio

1. Descargar repositorio:
>Encontrará dos ramas, master y develop, actualmente el código se encuentra mergeado a master

para master:
```bash
git clone https://github.com/lassorichard/marletti_webpage.git
```

## Información importante acerca del proyecto

1. Tags semánticos usados basados en los estándares de HTML5
2. Estilos para el responsive fueron creados usando diferentes breakpoints, mixins fueron creados para este propósito

```bash
$bp-mobile: 300px;
$bp-tablet: 600px;
$bp-desktop: 1000px;
```

>Uso de mixins:

Para los breakpoints, se pueden usar dentro de los componentes scss con el fin de usar diferentes anchos, acá unos ejemplos:
```bash
@inlude from(mobile) {
 //estilos correspondientes a la vista mobile
}
@inlude upto(tablet) {
 //estilos correspondientes a la vista tablet
}
@inlude from(desktop) {
 //estilos correspondientes a tamaños desde desktop hasta retina
}
```

Para las fuentes, se creó un mixin el cuál convierte a rem los tamaños de fuente:
```bash
en scss: @include font-size(20)
rendered: font-size: 20px; and font-size: 1.25rem;
```

3. Como preprocesador de estilos se usó SASS, los diferentes componentes .scss están organizados dentro de /assets/scss
>archivos como Color variables, Mixins, General Styles, Typography, Reset se encuentran alojados en /assets/scss/components

4. Los productos se muestran en tarjetas, agrupados por tipo de producto dentro de los cuáles se muestra la siguiente información
5. Tipo de producto
6. Ícono correspondiente a cada producto
7. Saldo del producto
8. Versión maximizada de la información*
9. Si es tarjeta de crédito el logo se mostrará correspondiente, si el número de producto empieza por 5 es mastercard, de lo contrario si es 4 será visa el logo que se mostrará
10. El número de la tarjeta de crédito es enmascarado antes de ser renderizado, por este motivo en el DOM no será visible el número completo
11. Formato de tarjetas **** **** **** ****
12. Se realiza la validación para el pago, si el saldo total es diferente al saldo disponible muestra botón de pago
13. Los productos que se muestran inicialmente son los relacionados a BANCO_1
14. Se creó opción de "Mostrar otros productos" con la cuál se puede prender y apagar la función de mostrar todos los productos ó los iniciales referidos a BANCO_1

### Tech stack

Nuxt.js

NPM

HTML5

CSS3

SASS

ES6

VUE

Axios

Jest

### Aprecio su tiempo leyendo este documento 
