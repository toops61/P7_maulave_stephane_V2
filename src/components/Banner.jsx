/* eslint-disable react/prop-types */
export default function Banner(props) {
    const {title,imageUrl} = props;    

  return (
    <section className="banner" role="banner" tabIndex={0}>
        {title ? <div className="title-container">
            <h1 tabIndex={0}>{title}</h1>
        </div> : <></>}
        <img src={imageUrl} alt="home" />
    </section>
  )
}