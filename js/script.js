// MOBILE HAMBURGER
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


// GALLERY FILTER
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

// BACK TO TOP BUTTON

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
