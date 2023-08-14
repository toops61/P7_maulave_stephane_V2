import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Card({appart}) {
    
  return (
    <Link to={`/logement/${appart.id}`} className="home-cards">
        <div className="title-card">
            <p tabIndex={0}>{appart?.title}</p>
        </div>
        <img src={appart?.cover} alt={appart?.title} />
    </Link>
  )
}