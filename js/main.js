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

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
}