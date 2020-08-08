$(document).ready(function(){
    if(window.location.href.indexOf('index') > -1) 
    {
        $('.slider').bxSlider({

        //Silder
        // caption:true,
            slideWidth:1200,
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            pager: true
        
        });
    }
    //Post
    if(window.location.href.indexOf('index') > -1) 
    {
        var posts =[
            {
                title:'prueba de titulo 1',
                date : 'Publicado el dia : ' + moment().date() +  ' de '  + moment().format("MMMM") + ' del año '  +  moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis sequi! Reiciendis ve voluptatum aliquid saepe dolorum ex eaque et, ipsam nihil minus, corrupti est atque qui explicabo totam maiores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta distinctio iusto, placeat molestias porro ut quibusdam doloremque corporis consequuntur numquam deserunt eos dolores architecto esse expedita ad sed! Corrupti, culpa?'
            },
            {
                title:'prueba de titulo 2',
                date : 'Publicado el dia : ' + moment().date() +  ' de '  + moment().format("MMMM") + ' del año '  +  moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis sequi! Reiciendis ve voluptatum aliquid saepe dolorum ex eaque et, ipsam nihil minus, corrupti est atque qui explicabo totam maiores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta distinctio iusto, placeat molestias porro ut quibusdam doloremque corporis consequuntur numquam deserunt eos dolores architecto esse expedita ad sed! Corrupti, culpa?'
            },
            {
                title:'prueba de titulo 3',
                date : 'Publicado el dia : ' + moment().date() +  ' de '  + moment().format("MMMM") + ' del año '  +  moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis sequi! Reiciendis ve voluptatum aliquid saepe dolorum ex eaque et, ipsam nihil minus, corrupti est atque qui explicabo totam maiores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta distinctio iusto, placeat molestias porro ut quibusdam doloremque corporis consequuntur numquam deserunt eos dolores architecto esse expedita ad sed! Corrupti, culpa?'
            },
            {
                title:'prueba de titulo 4',
                date : 'Publicado el dia : ' + moment().date() +  ' de '  + moment().format("MMMM") + ' del año '  +  moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis sequi! Reiciendis ve voluptatum aliquid saepe dolorum ex eaque et, ipsam nihil minus, corrupti est atque qui explicabo totam maiores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta distinctio iusto, placeat molestias porro ut quibusdam doloremque corporis consequuntur numquam deserunt eos dolores architecto esse expedita ad sed! Corrupti, culpa?'
            },
            
            {
                title:'prueba de titulo 5',
                date : 'Publicado el dia : ' + moment().date() +  ' de '  + moment().format("MMMM") + ' del año '  +  moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis sequi! Reiciendis ve voluptatum aliquid saepe dolorum ex eaque et, ipsam nihil minus, corrupti est atque qui explicabo totam maiores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta distinctio iusto, placeat molestias porro ut quibusdam doloremque corporis consequuntur numquam deserunt eos dolores architecto esse expedita ad sed! Corrupti, culpa?'
            },

            {
                title:'prueba de titulo 6',
                date : 'Publicado el dia : ' + moment().date() +  ' de '  + moment().format("MMMM") + ' del año '  +  moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis sequi! Reiciendis ve voluptatum aliquid saepe dolorum ex eaque et, ipsam nihil minus, corrupti est atque qui explicabo totam maiores.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta distinctio iusto, placeat molestias porro ut quibusdam doloremque corporis consequuntur numquam deserunt eos dolores architecto esse expedita ad sed! Corrupti, culpa?'
            },
            

        ];

        posts.forEach((item, index) =>{
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>    
            `;
            
            $('#post').append(post);
        });
    }
// Selector de tema

var theme = $('#theme');

$('#to-green').click(function(){
    theme.attr("href", "css/green.css");

});

$('#to-red').click(function(){
    theme.attr("href", "css/red.css");

});
$('#to-blue').click(function(){
    theme.attr("href", "css/blue.css");

});

//scroll arriba de la web
$('.up').click(function(e){
    e.preventDefault();
    //en donde pongo los efectos en que parte de la pagina
    $('html, body').animate({
        scrollTop: 0 }, 500)
       return false; 

});

//Login Falso solo guardar el nombre del usuario con localstorage

$('#login form').submit(function(){
  var form_name =  $('#form_name').val();

  localStorage.setItem('form_name',form_name);


});
 var form_name = localStorage.getItem('form_name');
    if(form_name != null && form_name !='indefined') {
      var about_parrafo =  $('#about p')   
      about_parrafo.html("<br><strong>Bienvenido, "  +  form_name + "</strong>");
      about_parrafo.append("<a href='#'id='logout'> Cerrar Sesión </a>");
      $('#login').hide();
      $('#logout').click(function(){
          localStorage.clear(); // borrar var
          location.reload(); //recargar la pagina
      });
    
}

//Acordeon

if(window.location.href.indexOf('about') > -1) {
    $('#acordeon').accordion();


}
if(window.location.href.indexOf('reloj') > -1) 
{
    setInterval(function (){
        var reloj = moment().format('hh:mm:ss');
        $('#reloj').html(reloj);

        }, 1000);
    

}
// validacion formulario con plugin jquery
if(window.location.href.indexOf('contact') > -1)
    $("form input[name='date']").datepicker({
        dateFormat:'dd-mm-yy'
    });
{
    $.validate({
        lang: 'es'
      });
}



});