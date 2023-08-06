import { useNavigate } from 'react-router-dom';
import image404 from '../assets/404.png';

export default function Error() {

  const navigate = useNavigate()

  return (
    <section className='error-page'>
      <div><img src={image404} alt="error 404" /></div>
      <button onClick={()=>navigate('/')} className="error-button"><h2>Go back home</h2></button>
    </section>
  )
}
