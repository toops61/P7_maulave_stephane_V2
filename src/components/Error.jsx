import { useNavigate } from 'react-router-dom';
import image404 from '../assets/404.png';

export default function Error() {

  const navigate = useNavigate()

  return (
    <section className='error-page'>
      <div className='error-container'><img src={image404} alt="error 404" /></div>
      <h1>Oups!La page que vous demandez n&#39;existe pas</h1>
      <button onClick={()=>navigate('/')} className="error-button"><p>Retourner à la page d&#39;accueil</p></button>
    </section>
  )
}
