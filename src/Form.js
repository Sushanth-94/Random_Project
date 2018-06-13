import React from 'react';

const Form = (props) => (
  <form onSubmit={props.onFormSubmit}>
    <input name="mail" type='email' placeholder="Enter a valid email" />
    <input name="password" type="password" placeholder="Enter password" />
    <button>Submit</button>
  </form>
);

export default Form;
