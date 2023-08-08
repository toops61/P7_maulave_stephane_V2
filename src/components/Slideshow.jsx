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
      setTimeout(() => {
        way === 'left' ? setCenterIndex(centerIndex > 0 ? (centerIndex-1) : (appartImages.length-1))
        : setCenterIndex(centerIndex < (appartImages.length-1) ? (centerIndex+1) : 0);
      }, 1200);
    }
  }
  
  const fillImages = () => {
    const tempArray = [];
    const leftImageIndex = centerIndex > 0 ? (centerIndex-1) : (appartImages.length-1);
    const rightImageIndex = centerIndex < (appartImages.length-1) ? (centerIndex+1) : 0;
    tempArray.push(appartImages[leftImageIndex],appartImages[centerIndex],appartImages[rightImageIndex]);
    setPicturesObjectsArray(tempArray);
    picturesRef?.current && (picturesRef.current.className = 'pictures-container');
  }

    useEffect(() => {
      appartImages.length && fillImages();
    }, [appartImages,centerIndex])

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