import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import logementsArray from "../../logements.json";
import Slideshow from "./Slideshow";

export default function FicheLogement() {
  const [appart, setAppart] = useState(null);
  const [appartImages, setAppartImages] = useState([]);

  console.log(appart);

  const apparts = logementsArray ? logementsArray : [];

  const {id} = useParams();
  
  useEffect(() => {
    const appartFound = apparts.find(e => e.id === id);
    appartFound && setAppart(appartFound);
    if (appartFound && appartFound.pictures) setAppartImages(appartFound.pictures.map(image => ({url:image,id:uuidv4()})));
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
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}