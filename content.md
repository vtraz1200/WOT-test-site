<form
  class="form"
  action="https://api.web3forms.com/submit"
  method="POST"
  autocomplete="off"
>
  <input
    type="hidden"
    name="access_key"
    value="26408754-11fc-47ae-ba6e-036a18819a21"
  />
  <div class="footer-card">
    <div class="footer-card-info">
      <div class="footer-card-firlas-name-cont">
        <!-- <h3 class="footer-card-info-title">First Name</h3> -->
        <!-- <h3 class="footer-card-info-title">Last Name</h3> -->
        <input
          name="first_name"
          class="footer-input-form-card"
          type="text"
          id="email"
          placeholder="First Name"
        />
        <input
          name="last_name"
          class="footer-input-form-card"
          type="text"
          id="email"
          placeholder="Last Name"
        />
      </div>
      <!-- <h3 class="footer-card-info-title">Phone Number</h3> -->
      <input
        name="phone_number"
        class="footer-input-form-card-two"
        type="number"
        id="email"
        placeholder="Phone Number"
      />
      <!-- <h3 class="footer-card-info-title">Email</h3> -->
      <input
        name="email"
        class="footer-input-form-card-two"
        type="email"
        id="email"
        placeholder="Email"
      />
      <h3 class="footer-card-info-title">What would you like to discuss?</h3>
      <textarea
        name="Message"
        autocomplete="off"
        placeholder="Message"
        class="footer-input-form-message"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-block submit-btn">Submit</button>
  </div>
</form>
