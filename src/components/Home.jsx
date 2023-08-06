import bannerHome from '../assets/home.webp';

export default function Home() {
  return (
    <div className="home-page">
        <div className="banner" role="banner">
            <div className="title-container">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <img src={bannerHome} alt="home" />
        </div>
    </div>
  )
}