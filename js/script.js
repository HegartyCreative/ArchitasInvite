$(document).ready(function(){

  // Table

  $(".set > a").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.text').slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");

    }else{
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");

    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");

    $(".set > a").removeClass("active");

    $(this).addClass("active");

    $('.text').slideUp(200);

    $(this).siblings('.text').slideDown(200);

    }
  });

  // Radio buttons

  $(".btn").click(function(){
  if($("#optionsRadios1").is(":checked"))
    $(".radio p").text("Option One Selected");
  else if($("#optionsRadios2").is(":checked"))
    $(".radio p").text("Option Two Selected");
  else
    $("h.radio p").text("Please select an option");
});


  // Smooth scrolling to links

var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - 70
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});



});


