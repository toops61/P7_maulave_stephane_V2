import logoWhite from '../assets/LOGO_white.png';

export default function Footer() {
  return (
    <footer>
        <div className="logo">
            <img src={logoWhite} alt="logo" tabIndex={0} />
        </div>
        <p tabIndex={0}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}