import Link from "next/link"
import "./components_css/navbar.css"

const Navbar = () => {
  return (
    <nav className="main_navbar">
        <div className="navbar_logo">
            <h2>Wizz</h2>
        </div>
        <div className="navbar_links">
            <ul>
                <li><a href="#">Home</a></li>
                {/* <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li> */}
            </ul>
        </div>
        <div className="navbar_right">
            <Link href="/profile/coolsem">
            <div className="navbar_profile">
                <h3 className="user_name_navbar">Sumit Choudhary</h3>
                <p className="user_username_navbar">cool sem</p>
            </div>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
