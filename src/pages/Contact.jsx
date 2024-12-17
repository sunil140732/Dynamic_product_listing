import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='container-fluid text-center py-5'>
        <h1 className='display-4 mb-4'>Get in Touch us!</h1>
        <p className="lead mb-5">
          We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>

        <div className='row align-items-center'>
          <div className='col-md-6 p-0'>
            <img src="/src/assets/Contact.jpeg" alt="Contact Us" className='img-fluid' style={{height:'600px',objectFit:'cover'}} />
          </div>
          <div className='col-md-6'>
            <div className='card p-4 fs-4 bg-info'>
              <form>
                <div className='mb-3'>
                  <label htmlFor="name" className='form-label'>Name</label>
                  <div className='input-group'>
                    <span className='input-group-text'><i className='bi bi-person'></i></span>
                    <input type="text" className='form-control' id='name' placeholder='Your Name' required/>
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor="email" className='form-label'>Email</label>
                  <div className='input-group'>
                    <span className='input-group-text'><i className='bi bi-envelope'></i></span>
                    <input type="text" className='form-control' id='email' placeholder='Your Email' required/>
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor="email" className='form-label'>Message</label>
                  <div className='input-group'>
                    <span className='input-group-text'><i className='bi bi-envelope'></i></span>
                    <input type="text" className='form-control' id='email' placeholder='Your Message' required/>
                  </div>
                </div>
                <button type='submit' className='btn btn-primary'>Send Message</button>
              </form>
            </div>
            <h2 className='mt-5'>Our Location</h2>
            <div className='card text-white bg-info mb-3'>
              <div className='card-body'>
                <h5 className='card-title'>Visit Us</h5>
                <p className='card-text'>123 Shopping st, Suite 456, Hyderabad</p>
                <p className='card-text'>Phone: (123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
