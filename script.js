$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

function askPassword() {
  // Ask the user for a password using the window.prompt() function
  var password = window.prompt("Enter Password: ");

  // Check the password against a predefined correct password
  if (password == "hope") {
    // If the password is correct, allow the user to download the file
    window.open('https://drive.google.com/file/d/1Xk-AlmCkTN1d8NDxi9rvNu6Ge7sjB0el/view?usp=sharing');
  } else {
    // If the password is incorrect, display an error message
    alert("Incorrect password");
  }
}
