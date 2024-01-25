import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // Add other fields as necessary
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Signup failed');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Handle success here, e.g., redirect to login page
      navigate('/login');
    })
    .catch(async (error) => {
      console.error('Error:', error);
      // If the response is not ok, log the response body for more details
      if (error.response) {
        const errorData = await error.response.json();
        console.error('Error Data:', errorData);
      }
    });
  };

  return (
    <section className="h-100 m-5">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate autoComplete="off">
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="name">Name</label>
                    <input id="name" type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required autoFocus />
                    <div className="invalid-feedback">
                      Name is required
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                    <input id="email" type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    <div className="invalid-feedback">
                      Email is invalid
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                    <div className="invalid-feedback">
                      Password is required
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary ms-auto">
                    Register
                  </button>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Already have an account? <a href="/login" className="text-dark">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;