/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

export default function Slideshow({ appartImages }) {

  const [centerIndex, setCenterIndex] = useState(0);
  const [picturesObjectsArray, setPicturesObjectsArray] = useState([]);
  const [slideShow, setSlideShow] = useState(false);

  const picturesRef = useRef();

  const movePictures = way => {
    if (picturesRef.current.className === 'pictures-container') {
      picturesRef.current.classList.add(`${way}-anim`);
      const lastIndex = appartImages.length-1;
      const newIndex = way === 'left' ? 
        (centerIndex > 0 ? (centerIndex-1) : lastIndex) :
        (centerIndex < lastIndex ? (centerIndex+1) : 0);
      setTimeout(() => {
        fillImages(way,newIndex);
      }, 1200);
      setCenterIndex(newIndex);
    }
  }
  
  //remove an element and add one
  const fillImages = (way,newIndex) => {
    const tempArray = [...picturesObjectsArray];
    const lastIndex = appartImages.length-1;
    if (way === 'right') {
      tempArray.shift();
      tempArray.push(appartImages[newIndex < lastIndex ? (newIndex+1) : 0]);
    } else {
      tempArray.pop();
      tempArray.splice(0,0,appartImages[newIndex > 0 ? (newIndex-1) : lastIndex]);
    }
    setPicturesObjectsArray(tempArray);
  }

    useEffect(() => {
      if (picturesObjectsArray.length && picturesRef?.current) (picturesRef.current.className = 'pictures-container');
    }, [picturesObjectsArray])
    

    useEffect(() => {
      const length = appartImages?.length;
      if (length) {
        const tempArray = [];
        tempArray.push(appartImages[0]);
        if (length > 1) {
          tempArray.splice(0,0,appartImages[length-1])
          tempArray.push(appartImages[1]);
        } 
        setPicturesObjectsArray(tempArray);
        setSlideShow(tempArray.length > 1 ? true : false);
      }
    }, [appartImages])
    

  return (
    slideShow ? <section className="pictures-slide" tabIndex={0}>
        <div className="arrow left" onClick={() => movePictures('left')} role="navigation" tabIndex={0}></div>
        <div className="index-shown">
          <p tabIndex={0}>{(centerIndex+1)+' / '+appartImages.length}</p>
        </div>
        <div className="arrow right" onClick={() => movePictures('right')} role="navigation" tabIndex={0}></div>
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
    </section> : 
    <section className="pictures-slide">
      <div className="picture-appart">
        {picturesObjectsArray.length ? <img src={picturesObjectsArray[0].url} alt="appart" /> : <></>}
      </div>
    </section>
  )
}