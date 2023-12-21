// this is the modal when you hit the sign up button and inside it is the sign up form with firstname, lastname, and email with a get discounts button
$(`#signUp`).html(`<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-white offset-3 textShadow sans-serifFont" id="signUpTitle">Sign Up With Us!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" id="hideClose" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="container" id="signUpForm">
      <form id="newSignUp">
      <label class="mt-2 col-12 text-white textShadow"><b>First Name:</b>
        <input type='text' id='firstName' class='form-control' required>
      </label>
      <br>
      <label class="mt-2 col-12 text-white textShadow"><b>Last Name:</b>
        <input type='text' id='lastName' class='form-control' required>
      </label>
      <br>
      <label class="mt-2 col-12 text-white textShadow"><b>Email Address:</b>
        <input type='text' id='email' class='form-control' required>
      </label>
      <br>
      <button class="btn btn-secondary border-light mt-3 offset-md-4" id="newSignUp" onsubmit="newSignUp(event)">Get Discounts!</button>
      </form>
      </div>
      </div>
    </div>
  </div>
</div>
`)
// this is when you cick on the get discounts button in the modal all of this will pop up after you have clicked on the get discounts btn
$(`#newSignUp`).on("submit", function () {
  let firstName = document.getElementById(`firstName`).value; // that way i can grab the value of this input so that when you put in your firstname it will show on the modal at the end
  let lastName = document.getElementById(`lastName`).value; // same here i grabbed the value of lastname from my input
  let email = document.getElementById(`email`).value; // same here grabbed the value of ur email
  $(`#hideClose`).hide();  // hid these buttons
  $(`#signUpTitle`).hide(); // hid this button as well
  $(`#signUpTitle`).text(`Enjoy Shopping With Us!`); // changed the title of the modal
  $(`#signUpTitle`).show(); // had the title show up again here
  // this is the signupform for when u provide all the information thats required this is what will pop up after you have submitted all of ur information
  $(`#signUpForm`).html(`<p class="text-white mb-3 sans-serifFont"><b>Thank you <span class="text-info textShadow"><b>${firstName} ${lastName}</b></span> for signing up with us! Please use your email address: <span class="text-info textShadow"><b> ${email}</b></span> so you can get the discounts that we are giving!!!</p>
    <button type="button" class="btn btn-secondary border-light offset-md-5 mt-3" data-bs-dismiss="modal">Close</button>`);
});