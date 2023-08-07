import aboutPict from '../assets/a_propos.webp';
import Banner from './Banner';

export default function About() {
  return (
    <div className="about-page">
        <Banner title={''} imageUrl={aboutPict} />
    </div>
  )
}