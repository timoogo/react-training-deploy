const RoadMap = ({percentage, title, content}) => {
    return ( 
        <section>
            <p>{percentage}</p>
            <span>{title}</span>
            <p>{content}</p>
        </section>
     );
}
 
export default RoadMap;