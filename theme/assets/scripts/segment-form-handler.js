// Grab a reference to our form
var form = $('form[name=identity-form]');

if(form != null)
{
  // Setup a handler to run when the form is submitted
  form.on('submit', function(e) {

    // If some client-side validation kicked in and wants to prevent
    // the form from submitting, bail out now without calling track or identify
    if ( e.isDefaultPrevented() ) {
      return
    }

    // If we got here, it's okay to fire our events and submit the form      

    // Stop the form from submitting...for now
    e.preventDefault();

    // Identify this visitor using their email address as a distinct ID
    // and as a new property
    var email = form.find('[name=Contact\\[Email\\]]').val();
    if (email) {
      analytics.alias(email);
      analytics.identify(email, {
        email: email
      });
    }

    // Track the event and include values from the form to our event props
    analytics.track("FormSubmitted", formValuesToProps(form));

    // Submit the form now that all our analytics stuff is done
    $(e.target).unbind('submit').trigger('submit');
  });
}
function addFormValuesToProps(form, props) {
    
      // When the form submit button is clicked, we want to grab all the
      // relevant field values from the form to add to the event properties
    
      var firstName = form.find('[name=Contact\\[FirstName\\]]').val();
      if (firstName) {
        props.firstName = firstName;
      }
    
      var lastName = form.find('[name=Contact\\[LastName\\]]').val();
      if (lastName) {
        props.lastName = lastName;
      }
    
      var email = form.find('[name=Contact\\[Email\\]]').val();
      if (email) {
        props.email = email;
      }   
    
      return props
}