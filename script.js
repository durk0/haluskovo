$( document ).ready(function() {
  $("#btn").click(function() {
      $('html, body').animate({
          scrollTop: $("#scroll").offset().top
      }, {duration: 2200, easing: 'easeOutBack'});
  });
});


  //
  //
  // $("#btn").click(function(){
  //     var top = $('body').find($(this).attr('href')).offset().top;
  //     $('html, body').animate({
  //         scrollTop: top
  //     },1000, 'easeOutBack');
  //     return false;
  // });
