/* eslint-disable react/prop-types */
import bannerHome from '../assets/home.webp';
import Banner from './Banner';
import Card from './Card';

export default function Home({ logementsArray }) {
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