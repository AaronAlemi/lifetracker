import { Link, useLocation } from "react-router-dom"
import "./LoginForm.css"

export default function LoginForm(loginFormContent, setLoginFormContent) {
  

  const handleOnInputChange = (evt) => {
    if (evt.target.name === "email") {
      /* if (evt.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }*/

    }

    setLoginFormContent((prev) => ({...prev, [evt.target.name]: evt.target.value}))
  
  }

  return (
    <div className="login-form">
      <div className="card">
        <h2>Login</h2>
        <div class="form">
          <div class="input-field">
            <label for="email">Email</label>
            <input className="form-input" type="email" name="email" placeholder="user@gmail.com" value={loginFormContent.email} onChange={handleOnInputChange}/>
          </div>
          <div class="input-field">
            <label for="password">Password</label>
            <input className="form-input" type="password" name="password" placeholder="password" value={loginFormContent.password} onChange={handleOnInputChange}/>
          </div>
          <button class="btn">Login</button>
        </div>
        <div class="footer">
          <p>Don't have an account? Sign up <a href="/register">here.</a></p>
        </div>
      </div>
    </div>
  )
}