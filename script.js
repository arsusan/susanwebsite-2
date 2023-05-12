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


// function checkPassword() {
//     // Get the password entered by the user
//     var password = document.forms[0].password.value;

//     // Check the password against a predefined correct password
//     if (password == "CV") {
//       // If the password is correct, allow the user to download the file
//       window.open('SusanCV.pdf');
//     } else {
//       // If the password is incorrect, display an error message
//       alert("Incorrect password");
//     }
// }
function askPassword() {
  // Ask the user for a password using the window.prompt() function
  var password = window.prompt("Enter Password: ");

  // Check the password against a predefined correct password
  if (password == "hope") {
    // If the password is correct, allow the user to download the file
    window.open('https://drive.google.com/file/d/1rt6VUuALgTlyzrGrUd1tUX2-tRqQsR3V/view?usp=sharing');
  } else {
    // If the password is incorrect, display an error message
    alert("Incorrect password");
  }
}
