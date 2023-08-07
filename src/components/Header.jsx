import { useNavigate } from 'react-router-dom';
import logoKasa from '../assets/LOGO.png'; 

export default function Header() {
    const navigate = useNavigate();

  return (
    <header>
        <div className="logo-container" tabIndex={0} onClick={() => navigate('/')}>
            <img src={logoKasa} alt="kasa" />
        </div>
        <nav className='header-nav'>
            <ul>
                <li tabIndex={0} onClick={() => navigate('/')}>Accueil</li>
                <li tabIndex={0} onClick={() => navigate('/about')}>A Propos</li>
            </ul>
        </nav>
    </header>
  )
}