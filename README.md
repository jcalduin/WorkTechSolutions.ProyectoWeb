# LM-ProyectoWeb | Evolucion de un proyecto web por etapas

Repositorio de la asignatura **Lenguaje de Marcas (1o DAW)** donde se desarrolla el mismo concepto de aplicacion web (*Work Tech Solutions*) a lo largo del curso, mejorando progresivamente en estructura, diseno, interaccion y experiencia de usuario.

## Despliegues actuales

- Maquetacion solo HTML: <https://jcalduin.github.io/WorkTechSolutions.ProyectoWeb/Maquetacion%20HTML/index.html>
- Maquetacion HTML y CSS: <https://jcalduin.github.io/WorkTechSolutions.ProyectoWeb/Maquetacion%20HTML%20y%20CSS/index.html>
- Maquetacion HTML, CSS y JS: <https://jcalduin.github.io/WorkTechSolutions.ProyectoWeb/Maquetacion%20HTML%2CCSS%20y%20JS/index.html>

## Objetivo del repositorio

Mostrar el **proceso de aprendizaje por trimestres** aplicado sobre una misma web corporativa, pasando de una base estructural en HTML a una solucion visual completa con estilos avanzados y finalmente a una version interactiva con JavaScript.

## Proceso de desarrollo por trimestres

## 1er trimestre - Maquetacion solo HTML

Carpeta: `Maquetacion HTML/`

### Tecnologias trabajadas

- HTML5 semantico (`header`, `nav`, `main`, `section`, `footer`)
- Formularios HTML (campos `required`, tipos `email`, `tel`, `textarea`)
- Estructuras de contenido: listas, tablas, `details/summary`, enlaces internos y externos
- Estilos en linea como primera aproximacion visual

### Funcionalidades conseguidas

- Navegacion interna por anclas hacia bloques de contenido
- Presentacion completa de secciones de negocio (servicios, tecnologias, opiniones, contacto)
- Formulario de contacto funcional a nivel de marcado
- Integracion de recursos multimedia externos (imagenes, iconos, redes)

### Aprendizajes clave

- Construccion de una pagina completa con estructura semantica
- Jerarquizacion de informacion y organizacion de contenido real
- Validaciones basicas de formularios desde HTML

## 2o trimestre - Maquetacion HTML + CSS

Carpeta: `Maquetacion HTML y CSS/`

### Tecnologias trabajadas

- HTML5 + CSS3 separados (`index.html` + `style.css`)
- Selectores por etiqueta, id y clase
- Flexbox para distribucion de bloques y tarjetas
- Gradientes, sombras, `hover`, `transform`, tipografia externa (Google Fonts)
- Barra de navegacion `sticky`

### Funcionalidades y mejoras respecto al trimestre 1

- Paso de estilos en linea a hoja de estilos reutilizable y mantenible
- Diseno visual consistente por secciones con identidad grafica definida
- Mejora de legibilidad y jerarquia visual (titulos, tarjetas, bloques de FAQ, footer)
- Mayor sensacion de dinamismo mediante transiciones y efectos de interaccion

### Aprendizajes clave

- Separacion real de estructura (HTML) y presentacion (CSS)
- Diseno modular por componentes/secciones
- Mejora de la experiencia de usuario a traves del estilo y la composicion

## 3er trimestre - Maquetacion HTML + CSS + JavaScript

Carpeta: `Maquetacion HTML,CSS y JS/`

### Tecnologias trabajadas

- HTML5 + CSS3 + JavaScript (DOM)
- Manejo de eventos (`click`) y modificacion de clases dinamicas
- Cambio de contenido en tiempo real (`textContent`)

### Funcionalidades implementadas

- **Modo claro/oscuro** alternando la clase `oscuro` sobre `body`
- **Mostrar/ocultar opiniones extra** con animacion de altura y cambio de icono
- **FAQ interactivo** con cambio de simbolos `+ / -` segun estado
- Consolidacion del diseno con paletas diferenciadas para ambos modos

### Aprendizajes clave

- Primeros pasos en interactividad real con JavaScript
- Relacion entre estilo y logica (clases CSS controladas por JS)
- Mejora de la experiencia de usuario mediante feedback visual

## Resumen de evolucion

1. **Base estructural**: se construye una web completa y semantica.
2. **Capa visual profesional**: se separa el estilo y se mejora notablemente la presentacion.
3. **Capa de comportamiento**: se incorporan interacciones que enriquecen el uso del sitio.

Esta progresion refleja el avance de resultados de aprendizaje de la asignatura: desde el marcado y la organizacion del contenido hasta la creacion de una web visualmente trabajada e interactiva.

## Estructura del repositorio

```text
LM-ProyectoWeb/
|- README.md
|- Maquetacion HTML/
|  |- index.html
|- Maquetacion HTML y CSS/
|  |- index.html
|  |- style.css
|- Maquetacion HTML,CSS y JS/
   |- index.html
   |- style.css
   |- script.js
```

## Como visualizar el proyecto en local

1. Clona el repositorio.
2. Abre la carpeta del trimestre/version que quieras revisar.
3. Ejecuta el archivo `index.html` en el navegador.

## Autor

- Javier Cabrera Miranda
- 1o DAW
- Asignatura: Lenguaje de Marcas

