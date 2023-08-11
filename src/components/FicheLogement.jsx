import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import logementsArray from "../../logements.json";
import Slideshow from "./Slideshow";
import starSvg from '../assets/star.svg';
import pinkStarSvg from '../assets/pink-star.svg';
import TextContainer from "./TextContainer";

export default function FicheLogement() {
  const [appart, setAppart] = useState(null);
  const [appartImages, setAppartImages] = useState([]);
  const [starsArray, setStarsArray] = useState([]);
  const [maxHeight, setMaxHeight] = useState(0);

  const apparts = logementsArray ? logementsArray : [];

  const {id} = useParams();

  const buildStars = rate => {
    const tempArray = [];
    for (let i = 0; i < 5; i++) {
      const star = i < rate ? 1 : 2;
      tempArray.push(star);
    }
    setStarsArray(tempArray);
  }

  const findHeight = heightText => {
    heightText > maxHeight && setMaxHeight(heightText);
  }
  
  useEffect(() => {
    const appartFound = apparts.find(e => e.id === id);
    appartFound && setAppart(appartFound);
    if (appartFound && appartFound.pictures) {
      setAppartImages(appartFound.pictures.map(image => ({url:image,id:uuidv4()})));
      buildStars(appartFound.rating);
    }
  }, [])

  return (
    <div className="logement-page">
      <Slideshow appartImages={appartImages} />
      <section className="appart-infos">
        <div className="title-container">
          <h1>{appart?.title}</h1>
          <p className="location">{appart?.location}</p>
          <div className="tags-container">
            {appart?.tags?.map((tag,index) => <div className="tag-btn" key={'tag'+index}>
              <p>{tag}</p>
            </div>)}
          </div>
        </div>
        <div className="host-container">
          <div className="person">
            <p>{appart?.host.name}</p>
            <div className="photo-container">
              <img src={appart?.host.picture} alt="host" />
            </div>
          </div>
          <div className="stars-container">
            {starsArray.map((star,index) => {
              return (
              <div className="star" key={'star'+index}>
                <img src={star === 2 ? starSvg : pinkStarSvg} alt="star" />
              </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="infos-container">
        <TextContainer arrayText={[appart?.description]} findHeight={findHeight} maxHeight={maxHeight} sameHeight={true} >Description</TextContainer>
        <TextContainer arrayText={appart?.equipments} findHeight={findHeight} maxHeight={maxHeight} sameHeight={true} >Equipements</TextContainer>
      </section>
    </div>
  )
}