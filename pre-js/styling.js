
var mediaQueryTablet = 991;

// Hacer que el contenedor del contenido principal sea igual al ancho de la ventana menos el ancho de los contenedores de los lados
function resizeMainCont (offset) {
    $(".cont-main").width(function () {
        return $(".wrapper").width() - ($(".cont-left").width() + $(".cont-right").width()) - offset;
    });
} resizeMainCont (0);

function changeContRightPosition () {
    if ($(window).width() <= mediaQueryTablet) {
        $(".cont-right").insertBefore($(".cont-left"));
    }else {
        $(".cont-right").insertAfter($(".cont-main"));
    }
} changeContRightPosition ();

// registrar el cambio de tamaño de la pantalla
$(window).resize(function () {
    if ($(window).width() >= mediaQueryTablet) {
        resizeMainCont (0);
    }else {
        $(".cont-main").width("initial");
    }
    changeContRightPosition();
});

setInterval(function () {
    if ($(window).width() > mediaQueryTablet) { 
        resizeMainCont (0);
    } else {
        $(".cont-main").width("initial");
    }
}, 100);
