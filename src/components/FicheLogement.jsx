import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function FicheLogement() {
  const apparts = useSelector(state => state.appartsSlice);

  const {id} = useParams();

  const appart = apparts.find(e => e.id === id);

  console.log(appart);
  
  return (
    <div className="logement-page">
      <section className="pictures-appart">
        <img src={appart.cover} alt="appartement" />
      </section>
      <section className="appart-infos">

      </section>
      <section>

      </section>
    </div>
  )
}