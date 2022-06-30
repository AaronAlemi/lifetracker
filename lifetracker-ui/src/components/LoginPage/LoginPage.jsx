import { Link, useLocation } from "react-router-dom"
import "./LoginPage.css"
import LoginForm from "components/LoginForm/LoginForm"

export default function LoginPage(loginFormContent, setLoginFormContent) {

  return (
    <div className="login-page">
        <LoginForm loginFormContent={loginFormContent} setLoginFormContent={setLoginFormContent}/>
    </div>
  )
}