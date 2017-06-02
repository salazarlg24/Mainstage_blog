$(document).ready(function(){
  "use strict";

  $(".button-collapse").sideNav();
  $(".menu-icon a").sideNav();
  $(".dropdown-button").dropdown({ hover: false });

  $(".back-to-top").smoothScroll({ speed: 'auto', easing: 'easeInOutSine' });

  $('.parallax').parallax();


  /********* Contact form submission code *********/

  var form         = $('#theme-contact');       // Get the form
  var formMessages = $('#theme-form-messages'); // Get the div to print the form messages

  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form and refresh the page.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type     : 'POST',
      url      : $(form).attr('action'),
      data     : formData,
      dataType : 'json',
      encode   : true
    })
    .done(function(data) {

      if (data.success) {

        // if we receive a success message from the PHP
        $(formMessages).html('<div class="alert alert-success z-depth-1">' + 
                               '<a href="#close-alert">' +
                                 '<i class="mdi-content-clear"></i>' +
                               '</a>' +
                               data.message +
                             '</div>');

        // Clear the form
        $('#contact-first-name').val('');
        $('#contact-first-name').removeClass('valid').next().removeClass('active');
        $('#contact-last-name').val('');
        $('#contact-last-name').removeClass('valid').next().removeClass('active');
        $('#contact-email').val('');
        $('#contact-email').removeClass('valid').next().removeClass('active');
        $('#contact-subject').val('');
        $('#contact-subject').removeClass('valid').next().removeClass('active');
        $('#contact-message').val('');
        $('#contact-message').removeClass('valid').next().removeClass('active');

      } else {

        if (data.errors.message) {
          // There was a problem sending the form
          $(formMessages).html('<div class="alert alert-error z-depth-1">' + 
                                 '<a href="#close-alert">' +
                                   '<i class="mdi-content-clear"></i>' +
                                 '</a>' +
                                 data.errors.message +
                               '</div>');

        } else {

          // The form has validation errors
          $(formMessages).html('<div class="alert alert-error z-depth-1">' + 
                                 '<a href="#close-alert">' +
                                   '<i class="mdi-content-clear"></i>' +
                                 '</a>' +
                                 '<strong>ERROR!</strong><br>' +
                                '</div>');
          if (data.errors.contactFirstName) {
            $(formMessages).find('.alert').append(data.errors.contactFirstName + "<br>")
          }
          if (data.errors.contactLastName) {
            $(formMessages).find('.alert').append(data.errors.contactLastName + "<br>")
          }
          if (data.errors.contactEmail) {
            $(formMessages).find('.alert').append(data.errors.contactEmail + "<br>")
          }
          if (data.errors.contactSubject) {
            $(formMessages).find('.alert').append(data.errors.contactSubject + "<br>")
          }
          if (data.errors.contactMessage) {
            $(formMessages).find('.alert').append(data.errors.contactMessage + "<br>")
          }

        }

      }

    })
    .fail(function(data) {

      // If there is an error in submitting the form send out a message
      $(formMessages).html('<div class="alert alert-error z-depth-1"><a href="#close-alert"><i class="mdi-content-clear"></i></a><strong>ERROR!</strong> We are sorry but there was an error in submitting the form!</div>');

    });
  });
  
});

/* Alert removal */
$(document).on('click', '[href=#close-alert]', function(){
  "use strict";
  $(this).parent().remove();
});

$(document).on('click', '[href=#]', function(e) {
  "use strict";
  e.preventDefault();
});