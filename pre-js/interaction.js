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