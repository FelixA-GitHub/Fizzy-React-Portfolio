import React, { useState } from "react";
import { capitalizeFirstLetter, validateEmail } from "../../utils/helpers"

function Contact() {

  const [pages] = useState([
    {
      name: "contact",
      description: 'Contact me anytime with questions, constructive criticism, or inquiries of collaboration'
    }
  ]);

  const [currentPage] = useState(pages[0]);

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="bg-contact">

      <form className="form-horizontal" id="contact-form" onSubmit={handleSubmit}>
        <div>
          <h1 data-testid="h1tag" className="title" style={{ fontSize: "46px" }}>{capitalizeFirstLetter(currentPage.name)}</h1>
          <p>
            {currentPage.description}
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input className="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div className="form-group">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div>
          <button className="btn btn-danger draw-border" data-testid="button" type="submit" >Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
