# Marletti Website

> Este proyecto es desarrollado por [Richard Lasso Ledesma]

## Repository

1. Repository Clone:

>You will find two branches, Master and Develop. The code is currently merged to master.

Clone master branch:

```bash
git clone https://github.com/lassorichard/marletti_webpage.git
```

2. The website is currently deployed in netlify from repository and you will find this link below.

```bash
https://xenodochial-booth-673c7a.netlify.app/
```

## How it works

To run this project we need to install the next plugins for Visual Studio Code:

1. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

### Steps

  1. Open a HTML file and right-click on the editor and click on Open with Live Server.
  2. Click to Watch Sass from Statusbar to turn on the live compilation and then click to Stop Watching Sass from Statusbar to turn on live compilation.

### Relevant information about this project

1. Mobile First
2. Semantic HTML
3. Sass as a CSS preprocessor
>Sass folder organization: 
    scss/abstracs variables and mixins
    scss/base base files, fonts, typography and utilities
    scss/components button as a component
    scss/layout header and footer
    scss/pages
4. Mixins:

```bash
$bp-mobile: 400px;
$bp-tablet: 768px;
$bp-desktop: 1024px;
$bp-huge: 1200px;
```
> Breakpoint Mixins example:

```bash
@inlude from(tablet) {
 //tablet styles
}
```

```bash
$base-font-size: 16px;
```
> rem convertion mixin:

```bash
@inlude font-size(20px)
rendered: font-size: 20px; and font-size: 1.25rem;
```

6. BEM methodology (Block, Element, Modifier)
7. Flexbox and Grid system for this project.
8. The library for the sliders are [bxSlider](https://bxslider.com/) with his respective documentation.
9. The sections "Publicaciones" and "eventos" it was consumed from a JSON file: 

```bash
https://json.extendsclass.com/bin/44f9f614419b
```

10. The animations was developed with CSS and JS, blocking the header as a fixed component and a fade in when the header move ahead.
11. Meta tags for SEO

## Tech stack

HTML5

CSS3

SASS

ES6

JS

bxSlider