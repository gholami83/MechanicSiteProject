import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setTimeout(() => {
        navigate('/')
      }, 1000);
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle errors here
    });
  };

  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center my-5"></div>
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate autoComplete="off">
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                    <input id="email" type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required autoFocus />
                    <div className="invalid-feedback">
                      Email is invalid
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-muted" htmlFor="password">Password</label>
                      <a href="forgot.html" className="float-end">
                        Forgot Password?
                      </a>
                    </div>
                    <input id="password" type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                    <div className="invalid-feedback">
                      Password is required
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input type="checkbox" name="remember" id="remember" className="form-check-input" checked={formData.remember} onChange={handleChange} />
                      <label htmlFor="remember" className="form-check-label">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Don't have an account? <a href="/signup" className="text-dark">Create One</a>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
               2017-2021 &mdash; Mechanic 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogInForm;