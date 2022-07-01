import { Link, useLocation } from "react-router-dom"
import "./NavLinks.css"

export default function NavLinks() {

  return (
    <ul className="nav-links">
      <Link to="/activity">
        <p>Activity</p>
      </Link>
      <Link to="/exercise">
        <p>Exercise</p>
      </Link>
      <Link to="/nutrition">
        <p>Nutrition</p>
      </Link>
      <Link to="/sleep">
        <p>Sleep</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/register">
        <p>Sign Up</p>
      </Link>
  </ul> 
  )
}