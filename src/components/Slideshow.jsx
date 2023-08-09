/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

export default function Slideshow({ appartImages }) {

  const [centerIndex, setCenterIndex] = useState(0);
  const [picturesObjectsArray, setPicturesObjectsArray] = useState([]);

  const picturesRef = useRef();

  /* const toTheLeft = () => {
    if (picturesRef.current.className === 'pictures-container') {
      picturesRef.current.classList.add('left-anim');
      setTimeout(() => {
        setCenterIndex(centerIndex > 0 ? (centerIndex-1) : (appartImages.length-1));
        picturesRef.current.classList.remove('left-anim');
      }, 1200);
    }
  }

  const toTheRight = () => {
    if (picturesRef.current.className === 'pictures-container') {
      picturesRef.current.classList.add('right-anim');
      setTimeout(() => {
        setCenterIndex(centerIndex < (appartImages.length-1) ? (centerIndex+1) : 0);
        picturesRef.current.classList.remove('right-anim');
      }, 1200);
    }
  } */

  const movePictures = way => {
    if (picturesRef.current.className === 'pictures-container') {
      picturesRef.current.classList.add(`${way}-anim`);
      const lastIndex = appartImages.length-1;
      setTimeout(() => {
        fillImages(way);
      }, 1250);
      way === 'left' ? setCenterIndex(centerIndex > 0 ? (centerIndex-1) : lastIndex)
      : setCenterIndex(centerIndex < lastIndex ? (centerIndex+1) : 0);
    }
  }
  
  //remove an element and add one
  const fillImages = way => {
    const tempArray = [...picturesObjectsArray];
    const lastIndex = appartImages.length-1;
    if (way === 'right') {
      tempArray.shift();
      tempArray.push(appartImages[(centerIndex+1) < lastIndex ? (centerIndex+2) : 0]);
    } else {
      tempArray.pop();
      tempArray.splice(0,0,appartImages[(centerIndex-1) > 0 ? (centerIndex-2) : lastIndex]);
    }
    setPicturesObjectsArray(tempArray);
  }

    useEffect(() => {
      if (picturesObjectsArray.length && picturesRef?.current) (picturesRef.current.className = 'pictures-container');
    }, [picturesObjectsArray])
    

    useEffect(() => {
      if (appartImages.length) {
        const tempArray = [];
        tempArray.push(appartImages[appartImages.length-1],appartImages[0],appartImages[1]);
        setPicturesObjectsArray(tempArray);
      }
    }, [appartImages])
    

  return (
    <section className="pictures-slide">
        <button className="arrow left" onClick={() => movePictures('left')}></button>
        <div className="index-shown">
          <p>{(centerIndex+1)+' / '+appartImages.length}</p>
        </div>
        <button className="arrow right" onClick={() => movePictures('right')}></button>
        <div className="top-section">
          {picturesObjectsArray.length ?
            <div className="pictures-container" ref={picturesRef}>
              <div className="picture-appart left">
                <img src={picturesObjectsArray[0].url} alt="appart" />
              </div>
              <div className="picture-appart">
                <img src={picturesObjectsArray[1].url} alt="appart" />
              </div>
              <div className="picture-appart right">
                <img src={picturesObjectsArray[2].url} alt="appart" />
              </div>
            </div> : <></>}
        </div>
    </section>
  )
}