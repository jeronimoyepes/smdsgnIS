# smdsgnIS
Sistema de información de Simdesign.
_____


Este proyecto esta desarrollado con GULP desde Node Package Manager.


Estructura de carpetas:

* __dist__   *archivos finales*
  * __css__  *hojas de estilo*
  * __img__   *imagenes*
    - __icons__   *Iconos de la interfaz*
    - __photos__   *Fotos de perfil, de proyectos*
    - __project-images__   *iconos usados en la selección de imagen de proyecto*
  * __js__   *scripts*
  * __create-project.html__   *Pagina donde se crean los proyectos, es la unica donde esta disponible el HTML (además de la plantilla) para la barra (feed) de notificaciones,esto para evitar duplicarlo innecesariamente en otras*
  * __index.html__   *Inicio de sesión*
  * __project-list.html__   *Lista de proyectos en los que hago parte*
  * __project.html__   *Detalle de proyecto - proyecto abierto*
  * __register.html__   *formulario de registro*
  * __template.html__   *Plantilla básica de la interfaz*
  
* __pre-js__   *archivos de javascript antes de minificar y concatenar es decir editables*
* __scss__   *archivos de estilos SCSS, antes de convertir a CSS*
* __gulpfile.js__   *Comandos de GULP, minificar y concatenar javascrip, procesar SCSS*
* __package.json__   *Modulos de Node Package Manager del proyecto*





