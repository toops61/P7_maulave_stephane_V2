import { Link, NavLink } from 'react-router-dom';
import logoKasa from '../assets/LOGO.png'; 

export default function Header() {

  return (
    <header>
            <Link className="logo-container" to="/">
                <img src={logoKasa} alt="kasa" />
            </Link>
        <nav className='header-nav'>
            <ul>
                <li><NavLink to="/">
                  Accueil
                  <div className="underline"></div>
                </NavLink></li>
                <li><NavLink to="/about">
                  A Propos
                  <div className="underline"></div>
                </NavLink></li>
            </ul>
        </nav>
    </header>
  )
}