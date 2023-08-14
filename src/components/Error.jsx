import { Link } from 'react-router-dom';
import image404 from '../assets/404.png';

export default function Error() {

  return (
    <section className='error-page'>
      <div className='error-container'><img src={image404} alt="error 404" tabIndex={0} /></div>
      <h1 tabIndex={0}>Oups!La page que vous demandez n&#39;existe pas</h1>
      <p><Link  to="/">Retourner à la page d&#39;accueil</Link></p>
    </section>
  )
}
