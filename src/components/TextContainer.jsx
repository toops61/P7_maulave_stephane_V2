/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

export default function TextContainer({children,arrayText,findHeight,maxHeight }) {
    const [open, setOpen] = useState(false);

    const refText = useRef();
    const containerRef = useRef();

    useEffect(() => {
        refText?.current && findHeight(refText.current.offsetHeight);
    }, [arrayText])

    useEffect(() => {
        if (containerRef?.current) {
            console.log(containerRef.current.style);
            const style = containerRef.current.style;
            if (maxHeight && open) {
                style.height = (maxHeight+10+'px');
                style.transform = (`translateY(0)`);
            } else {
                style.height = '0';
                style.transform = (`translateY(-${maxHeight+10+'px'})`);
            }

        } 
    }, [maxHeight,open])
    

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