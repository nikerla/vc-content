// Grab a reference to our form
var forms = $('form');

if(forms)
{
  forms.each(function(index, element){
    var form = $(element);
    
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

      var eventName = form.find('[name=Contact\\[Subject\\]]').val();
      if(!eventName)
      {
        // try getting message
        eventName = form.find('[name=Contact\\[Message\\]]').val();
        if(!eventName)
        {
          eventName = "Form Submitted"
        }      
      }      

      // Track the event and include values from the form to our event props
      var props = {};
      props = addFormValuesToProps(form, props)

      // Identify this visitor using their email address as a distinct ID
      // and as a new property
      var email = form.find('[name=Contact\\[Email\\]]').val();
      if (email) {
        props.email = email;
        props.cf_segmentcampaign = eventName;
        analytics.alias(email);
        analytics.identify(email, props);
      }

      analytics.track(eventName, props);

      // Submit the form now that all our analytics stuff is done
      return true;
      //$(e.target).unbind('submit').trigger('submit');
    });

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

      var phone = form.find('[name=Contact\\[Phone\\]]').val();
      if (phone) {
        props.phone = phone;
      }   

      var jobTitle = form.find('[name=Contact\\[JobTitle\\]]').val();
      if (jobTitle) {
        props.title = jobTitle;
      }      

      var companyName = form.find('[name=Contact\\[CompanyName\\]]').val();
      if (companyName) {
        props.company = {};
        props.company.name = companyName;
      }

      var message = form.find('[name=Contact\\[Message\\]]').val();
      if (message) {
        props.recent_note = message;
      }      
      
      return props
}