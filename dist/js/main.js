// Toggle de la barra de notificaciones
$(".notification").click(function () {
        $(".noti-feed").slideToggle(300);
});

// Toggle de los comentarios en las contribuciones
$(".contrib-actions .comment").click(function () {
        $(this).parents(".text").siblings(".comments").slideToggle(300);
});

// Toggle de formulario para nueva contribucion
$("section h4 a").click(function () {
        $(this).parents().siblings(".contrib-coment-form").slideToggle(300);
});

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
