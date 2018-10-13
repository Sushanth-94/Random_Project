import React from 'react';

const Register = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h2> Join ParkEasy</h2>
          <p>Create your account</p>
          <form>
            <div className="form-group">
              <input placeholder="Name" className="form-control form-control-lg" type="text" id="id_name" value="" autoComplete="true" maxLength="50" minLength="2"/>
            </div>
            <div className="form-group">
              <input placeholder="Email address" className="form-control form-control-lg" type="email" name="email" id="id_email" value="" autoComplete="true" maxLength="50" minLength="5"/>
            </div>
            <div className="form-group">
              <input placeholder="Password" className="form-control form-control-lg" type="password" name="password" id="id_password" value="" autoComplete="true" maxLength="50" minLength="6"/>
            </div>
            <button type="submit" className="btn btn-info btn-block mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
);

export default Register;
