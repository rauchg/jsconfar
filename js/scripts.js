$(document).ready(function(){

  $('form.signup-form').submit(function(event){
    ga( 'send', 'event', 'newsletter', 'signup' );
  });

});