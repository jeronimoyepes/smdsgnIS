$(document).ready(function($) {
    
    // Hacer que el contenedor del contenido principal sea igual al ancho de la ventana menos el ancho de los contenedores de los lados 
    function layoutResizing () {
        if ($(window).width() > 991) {
            $(".cont-main").width(function () {
                return $(".wrapper").width() - ($(".cont-left").width() + $(".cont-right").width());
            })
        }else {
            $(".cont-main").width("initial");
        }
    }layoutResizing ();
    
    // registrar el cambio de tamaño de la pantalla
    $(window).resize(function () {
        layoutResizing();
    });
    
});
