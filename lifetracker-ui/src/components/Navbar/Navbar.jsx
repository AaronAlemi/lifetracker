import { Link } from "react-router-dom"
import "./Navbar.css"
import NavLinks from "components/Navlinks/NavLinks"

export default function Navbar() {

  return (

    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt="logo" />
          </Link>
        </div>
        <NavLinks />
      </div>
    </nav>

  )
}
