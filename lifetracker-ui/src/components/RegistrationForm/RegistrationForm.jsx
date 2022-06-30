import { Link, useLocation } from "react-router-dom"
import "./RegistrationForm.css"

export default function RegistrationForm(registrationFormContent, setRegistrationFormContent) {
  

  const handleOnInputChange = (evt) => {
    if (evt.target.name === "email") {
      /* if (evt.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }*/

    }

    setRegistrationFormContent((prev) => ({...prev, [evt.target.name]: evt.target.value}))
  
  }

  return (
    <div className="registration-form">
      <div className="card">
        <h2>Sign Up</h2>
        <div class="form">
          <div class="input-field">
            <label for="email">Email</label>
            <input className="form-input" type="email" name="email" placeholder="user@gmail.com" value={registrationFormContent.email} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="name">Username</label>
            <input className="form-input" type="text" name="username" placeholder="John123" value={registrationFormContent.username} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="name">First Name</label>
            <input className="form-input" type="text" name="first_name" placeholder="John" value={registrationFormContent.first_name} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="name">Last Name</label>
            <input className="form-input" type="text" name="last_name" placeholder="Smith" value={registrationFormContent.last_name} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input className="form-input" type="password" name="password" placeholder="password" value={registrationFormContent.password} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="password">Confirm Password</label>
            <input className="form-input" type="password" name="passwordConfirm" placeholder="password" value={registrationFormContent.password} onChange={handleOnInputChange}/>
          </div>
          <button class="btn">Sign up</button>
        </div>
      </div>
    </div>
  )
}