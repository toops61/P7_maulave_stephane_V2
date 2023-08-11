/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

export default function TextContainer({children,arrayText,findHeight,maxHeight,sameHeight }) {
    const [open, setOpen] = useState(false);
    const [containerHeight, setContainerHeight] = useState(0);

    const refText = useRef();
    const containerRef = useRef();
    
    useEffect(() => {
        const max = maxHeight ? maxHeight : 0;
        setContainerHeight(!sameHeight && refText?.current ? refText.current.offsetHeight : max);
    }, [refText,maxHeight,arrayText]);
    
    useEffect(() => {
        if (refText?.current && sameHeight) findHeight(refText.current.offsetHeight);
    }, [arrayText]);

    useEffect(() => {
        if (containerRef?.current) {
            const style = containerRef.current.style;
            if (containerHeight && open) {
                style.height = (containerHeight+10+'px');
                style.transform = (`translateY(0)`);
            } else {
                style.height = '0';
                style.transform = (`translateY(-${containerHeight+10+'px'})`);
            }
        }
    }, [containerHeight,open]);
    

  return (
    <div className={"dropdown-container" + (open ? " open" : "")}>
        <div className="title-bar">
            <h4>{children}</h4>
            <div className="chevron" onClick={() => setOpen(!open)}></div>
        </div>
        <div className="text-container" ref={containerRef}>
            {arrayText?.length ? <div className="text-infos" ref={refText}>
                {arrayText.map((text,index) => <p key={'text'+index}>{text}</p>)}
            </div> : <></>}
        </div>
    </div>
  )
}