import { Link, useNavigate } from "react-router-dom"
import "./LoginForm.css"

export default function LoginForm( {loginFormContent, setLoginFormContent, isLoggedIn, setIsLoggedIn} ) {

  const navigate = useNavigate()

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

  /* const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    try {
      const res = await axios.post(`http://localhost:3001/auth/login`, form)
      if (res?.data) {
        setAppState(res.data)
        setIsLoading(false)
        navigate("/portal")
      } else {
        setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err)
      const message = err?.response?.data?.error?.message
      setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
      setIsLoading(false)
    }
  } */

  const handleOnSubmit = async (e) => {
    console.log("Submitted")
    console.log("Logged in status: " + isLoggedIn)
    e.preventDefault()
    setIsLoggedIn(true)
    navigate('/activity')
    console.log("Logged in status: " + isLoggedIn)
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
          <button class="btn" onClick={handleOnSubmit}>Login</button>
        </div>
        <div class="footer">
          <p>Don't have an account? Sign up <a href="/register">here.</a></p>
        </div>
      </div>
    </div>
  )
}