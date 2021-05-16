document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".message_form").onsubmit = (event) => {
    event.preventDefault()
    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var message = document.querySelector("#message").value
    var data = {
      service_id: config["service_id"],
      template_id: config["template_id"],
      user_id: config["user_id"],
      template_params: {
          'name': name,
          'email': email, 
          'message': message, 
      }
    };
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function() {
      document.querySelector(".modal-title").innerHTML = "Message Sent";
      document.querySelector(".modal-body").innerHTML = "We will get back to you soon!";
      document.querySelector(".modal-title").style = "color:green;";
    }).fail(function(error) {
      document.querySelector(".modal-title").innerHTML = "Message could not be sent";
      document.querySelector(".modal-body").innerHTML = "Sorry, we've run into an error. Try again later";
      document.querySelector(".modal-title").style = "color:red;";
    });
  }
})


