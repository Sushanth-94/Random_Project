import React from 'react';

const Register = () => (
  <form>
    <h2> Join Park your Car</h2>
    <p>Create your account</p>
    <label placeholder="email">
      <input placeholder="email" type="email" name="email" id="id_email" value="" autocomplete="true" maxlength="50" minlength="5"/>
    </label>
    <input placeholder="password" type="password" name="password" id="id_password" value="" autocomplete="true" maxlength="50" minlength="5"/>
  </form>

);

export default Register;
