import logoKasa from '../assets/LOGO.png'; 

export default function Header() {
  return (
    <header>
        <div className="logo-container">
            <img src={logoKasa} alt="kasa" />
        </div>
        <nav className='header-nav'>
            <ul>
                <li>Accueil</li>
                <li>A Propos</li>
            </ul>
        </nav>
    </header>
  )
}