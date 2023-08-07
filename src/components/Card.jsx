import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Card({appart}) {
    const navigate = useNavigate();
    
  return (
    <div className="home-cards" tabIndex={0} onClick={() => navigate(`/logement/${appart.id}`)}>
        <div className="title-card">
            <h4 tabIndex={0}>{appart?.title}</h4>
        </div>
        <img src={appart?.cover} alt={appart?.title} />
    </div>
  )
}