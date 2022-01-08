$(document).ready(function(){
    $('.burguer').click(function (){
        $("ul.nav__list").addClass("opening");
    });
    $('.close--navBar').click(function(){
        $('ul.nav__list').removeClass("opening");
    });
});