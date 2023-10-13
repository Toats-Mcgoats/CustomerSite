$(function(){
  
    $(window).on('scroll', function() {
        if($(window).scrollTop()){
          $('header').addClass('scrolled');
        }
        else {
          $('header').removeClass('scrolled');
        }
    });
});
 

//  Smooth Scroll
// ===============
$(function(){
  $("#top-sec").click(function(){
      $path = $("#top").offset().top;

      $('html, body').animate({scrollTop:$path}, 2000);
  });

  $("#about-sec").click(function(){
      $path = $("#about").offset().top;

      $('html, body').animate({scrollTop:$path}, 1000);
  });

  $("#portfolio-sec").click(function(){
      $path = $("#portfolio").offset().top;

      $('html, body').animate({scrollTop: $path}, 2000);
  });

  $("#connect-sec").click(function(){
    $path = $("#connect").offset().top;

    $('html, body').animate({scrollTop: $path}, 2000);
  });

  $("#portfolio-slide").click(function(){
    $path = $("#portfolio").offset().top;

    $('html, body').animate({scrollTop: $path}, 2000);
  });
});


/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("mainMenu").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("mainMenu").style.width = "0%";
}
