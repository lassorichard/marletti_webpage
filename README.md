# Richard Lasso - Prueba code-labs

> Marletti website

## Repositorio

1. Descargar repositorio:
>Encontrará dos ramas principales, master y develop, actualmente el código se encuentra mergeado a master.

para master:
```bash
git clone https://github.com/lassorichard/marletti_webpage.git
```

2. El sítio se subió a una instancia en netlify desde mi repositorio y desde el siguiente link se puede visualizar desde cualquier dispotivo

```bash
https://xenodochial-booth-673c7a.netlify.app/
```


## Información importante acerca del proyecto

1. Mobile First como base fundamental en el desarrollo del proyecto
2. Tags semánticos usados basados en los estándares de HTML5
3. Como preprocesador de estilos se usó SASS, los diferentes componentes .scss están organizados dentro de /scss
>Los archivos fueron organizados en diferentes carpetas: 
    scss/abstracs se encuentran los archivos variables y mixins
    scss/base se encuentran los archivos base, fonts, typography, utilities
    scss/components se encuentra el archivo button
    scss/layout se encuentran los archivos header y footer
    scss/pages se encuentra el archivo
4. Uso de mixins:

```bash
$bp-mobile: 400px;
$bp-tablet: 768px;
$bp-desktop: 1024px;
$bp-huge: 1200px;
```
> Para los breakpoints, se usaron dentro de los componentes scss con el fin de usar diferentes anchos, acá uno ejemplo:

```bash
@inlude from(tablet) {
 //estilos correspondientes a la vista tablet
}
```

```bash
$base-font-size: 16px;
```
> Para las fuentes, se creó un mixin el cuál convierte a rem los tamaños de fuente:

```bash
@inlude font-size(20px)
rendered: font-size: 20px; and font-size: 1.25rem;
```

6. La metodología utilizada para el preprocesador sass fue BEM (Block, Element, Modifier)
7. Dentro del proyecto la utilizacion de CSS Flexbox fue crucial y tambien en pequeña proporción se utilizó CSS Gridbox.
8. Para el slider de la sección "Conoce nuestras Variedades" y "Publicaciones y eventos" se hizo uso de la libreria bxSlider teniendo en cuenta el diseño responsive
9. Los items de la sección "Publicaciones y eventos" fueron cargados por medio de un Json el cual se hizo uso de un hosting en linea para desarrollar este proyecto, el URL del archivo Json es: 

```bash
https://json.extendsclass.com/bin/44f9f614419b
```

10. La animación del menú fue desarrollada gracias a la integración de CSS y JS, haciendo posible un diseño fluido y al mismo tiempo bloqueando el scroll para poner en detalle el menú
12. El header fue igualmente desarrollado gracias a la integración de CSS y JS, resaltando esta barra de navegación y ser asequible en cualquier lugar de la página web, tanto para mobile como para desktop
13. Se crearon las etiquetas para el posicionamiento de la pagina web en los buscadores

## Notas
Por limitación de tiempo hay algunas cosas que hubiera querido hacer:
1. Creación del slider con JS puro desvinculando librerías
2. Configuración del proyecto con paquetes npm para levantar un local host y poder servir al json de manera local
3. Automatizar tareas de transpilación de scss y JS a los bundle
4. Hacer cross browsing en diferentes dispositivos y navegadores
5. Implementar un lógica de lazy loading para las imagenes optimizando así tiempo de carga y peso
6. Configurar tareas de Unit Testing
7. Hacer pruebas en screen reader para la accesibilidad


## Tech stack

HTML5

CSS3

SASS

ES6

JS

bxSlider

### Aprecio su tiempo leyendo este documento 
