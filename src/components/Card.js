const Card = ({title, desc, image, link}) => {
    return ( 
        <section>
            <h1>Titre : {title}</h1>
            <p>Descriptions : {desc}</p>
            <img src={image} alt={title}/>
            <a href={link} title={title}>{title}</a>
        </section>
     );
}

export default Card;