import { Link } from "react-router-dom"
import "./Navbar.css"
import NavLinks from "components/Navlinks/NavLinks"

export default function Navbar() {

  return (

    <nav className="Navbar">
      <ul className="logo">
        <li>
          
            <img src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Healthy-life-logo-vector-by-Mansel-Brist-2-580x406.jpg" alt="logo" />
            <h2>LIFETRACKER</h2>
      
        </li>
      </ul>
      <NavLinks></NavLinks>
    
    </nav>
  )
}
