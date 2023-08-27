/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Slideshow from "./Slideshow";
import starSvg from '../assets/star.svg';
import pinkStarSvg from '../assets/pink-star.svg';
import TextContainer from "./TextContainer";

export default function FicheLogement({ logementsArray }) {
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
    const appartsTemp = apparts.length ? apparts : (sessionStorage.logementsArray ? JSON.parse(sessionStorage.getItem('logementsArray')) : []);
    const appartFound = appartsTemp.find(e => e.id === id);
    if (appartFound) {
      let hostName = appartFound?.host?.name ? appartFound.host.name : '';
      if (hostName) {
        hostName = hostName.replace(' ','\n');
        appartFound.host.name = hostName;
      } 
      setAppart(appartFound);
      if (appartFound.pictures) {
        setAppartImages(appartFound.pictures.map(image => ({url:image,id:uuidv4()})));
        buildStars(appartFound.rating);
      }
    }
  }, [])

  return (
    <div className="logement-page">
      <Slideshow appartImages={appartImages} />
      <section className="appart-infos">
        <div className="title-container">
          <h1 tabIndex={0}>{appart?.title}</h1>
          <h2 className="location" tabIndex={0}>{appart?.location}</h2>
          <div className="tags-container">
            {appart?.tags?.map((tag,index) => <div className="tag-btn" key={'tag'+index} tabIndex={0}>
              <p>{tag}</p>
            </div>)}
          </div>
        </div>
        <div className="host-container">
          <div className="person">
            <p tabIndex={0}>{appart?.host.name}</p>
            <div className="photo-container">
              <img src={appart?.host.picture} alt="host" tabIndex={0}/>
            </div>
          </div>
          <div className="stars-container" tabIndex={0}>
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