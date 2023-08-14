import bannerHome from '../assets/home.webp';
import Banner from './Banner';
import Card from './Card';
import logementsArray from "../../logements.json";

export default function Home() {
    const apparts = logementsArray ? logementsArray : [];

  return (
    <div className="home-page">
        <Banner imageUrl={bannerHome} title={'Chez vous,\n partout et ailleurs'} />
        <section className="cards-container">
            {apparts.length ? apparts.map(appart => <Card key={appart.id} appart={appart} />) : <></>}
        </section>
    </div>
  )
}