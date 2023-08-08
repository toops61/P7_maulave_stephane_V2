import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function FicheLogement() {
  const [appart, setAppart] = useState(null);
  const [centerIndex, setCenterIndex] = useState(1);
  const [appartImages, setAppartImages] = useState([]);

  const apparts = useSelector(state => state.appartsSlice);

  const {id} = useParams();
  
  useEffect(() => {
    const appartFound = apparts.find(e => e.id === id);
    appartFound && setAppart(appartFound);
    if (appartFound && appartFound.pictures) setAppartImages(appartFound.pictures.map(image => ({url:image,id:uuidv4()})));
  }, [])
  

  const toTheLeft = () => {
    document.querySelector('.top-section').classList.add('left-anim');
    setTimeout(() => {
      setCenterIndex(centerIndex > 2 ? 1 : (centerIndex+1));
    }, 800);
  }

  const toTheRight = () => {
    document.querySelector('.top-section').classList.add('right-anim');
    setTimeout(() => {
      setCenterIndex(centerIndex > 1 ? (centerIndex-1) : 3);
    }, 800);
  }
  
  const PictureSection = () => {
    const [picturesObjectsArray, setPicturesObjectsArray] = useState([]);

    const fillImages = () => {
      const tempObjects = [];
      let order = [];
      switch (centerIndex) {
        case 1:
          order = [2,0,1];
          break;
        case 2:
          order = [0,1,2];
          break;
        case 3:
          order = [1,2,0];
          break;
      }
      order.map(el => tempObjects.push({id:appartImages[el].id,url:appartImages[el].url}));
      setPicturesObjectsArray([...tempObjects]);
    }

    useEffect(() => {
      appartImages.length && fillImages();
    }, [centerIndex])

    return (
    <section className="top-section">
      {picturesObjectsArray.length ? <>
        <div className="picture-container">
          <img src={picturesObjectsArray[0].url} alt="appart" />
        </div>
        <div className="picture-container visible">
          <img src={picturesObjectsArray[1].url} alt="appart" />
        </div>
        <div className="picture-container">
          <img src={picturesObjectsArray[2].url} alt="appart" />
        </div>
      </> : <></>}
    </section>)
  }

  return (
    <div className="logement-page">
      <section className="pictures-appart">
        <button className="arrow left" onClick={toTheLeft}></button>
        <button className="arrow right" onClick={toTheRight}></button>
        {apparts.length ? <PictureSection /> : <></>}
      </section>
      <section className="appart-infos">
        <h1>{appart?.title}</h1>
      </section>
      <section>

      </section>
    </div>
  )
}