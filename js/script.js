$( document ).ready(function() {
    // console.log( "ready!" );
    $('.hamburger').click(function(){
      $('.mobile').toggleClass('visible');
    });
});

// Hamburger for Work Gallery Filter

// $( document ).ready(function() {
//     // console.log( "ready!" );
//     $('.hamburgerfilter').click(function(){
//       $('.mobilefilter').toggleClass('visible');
//     });
// });


// gallery filter
var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('#parent > a').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > a').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})
