/* EMAIL FORM HANDLING */

$('#email-form').submit(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    // store value added to field in a variable
    let val = $('#email').val();
    // add email address to message
    $('.form-confirmation-message span').text(val);
    // show message (initially hidden with "hide" class)
    $('.form-confirmation-message').removeClass('hide');
    // hide input
    $('.form-input').addClass('hide');
  }
})

$(document).ready(function() {
  function moveText() {
      $(".banner p").animate({ "margin-left": "-99%" }, 15000, "linear", function() {
          // Reset the position once the animation is complete
          $(this).css("margin-left", "100%");
          // Call the function again for continuous looping
          moveText();
      });
  }

  // Call the function to start the animation
  moveText();
});

// function toggleMenu() {
//   const navLinks = document.querySelector('.nav-links');
//   navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
// }

// use vanilla js to add buttons to the page
// const btns = '<button class="btn-menu">Menu</button><button class="btn-close">Close</button>';
// const header = document.querySelector('header');
// header.insertAdjacentHTML('beforeend',btns);

// function initMenu(){
//   $('body').addClass('js');
//   $('nav').addClass('hide');
//   $('.btn-close').addClass('hide');
// }

// $('.btn-menu').click(function(){
//   $('nav').removeClass('hide');
//   $('.btn-close').removeClass('hide');
// })

// $('.btn-close').click(function(){
//   $('nav').addClass('hide');
//   $('.btn-close').addClass('hide');
// })

// initMenu();