# smdsgnIS
Sistema de inforamción de simdesign.
_____


Este proyecto esta desarrollado con GULP desde Node Package Manager.


Estructura de carpetas:

* dist   *archivos finales*
  * css
  * img
   * icons   *Iconos de la interfaz*
   * photos   *Fotos de perfil, de proyectos*
   * project-images   *iconos usados en la selección de imagen de proyecto*
  * js
  * create-project.html   *Pagina donde se crean los proyectos, es la unica donde esta disponible el HTML (además de la plantilla) para la barra (feed) de notificaciones,esto para evitar duplicarlo innecesariamente en otras*
  * index.html   *Inicio de sesión*
  * project-list.html   *Lista de proyectos en los que hago parte*
  * project.html   *Detalle de proyecto - proyecto abierto*
  * register.html   *formulario de registro*
  * template.html   *Plantilla básica de la interfaz*
  
* pre-js   *archivos de javascript antes de minificar y concatenar es decir editables*
* scss   *archivos de estilos SCSS, antes de convertir a CSS*
* gulpfile.js   *Comandos de GULP, minificar y concatenar javascrip, procesar SCSS*
* package.json   *Modulos de Node Package Manager del proyecto*





