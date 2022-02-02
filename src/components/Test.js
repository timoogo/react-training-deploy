  // Todo 3 :
  // Crée un composant RoadMap qui comprend les props suivante :
  // percentage, title, content
  // À l'aide de votre array DataRoadMap, boucler sur votre composant


































const Card = ({title, desc, image}) => {
    return(
        <div>
            <h2>Titre : {title}</h2>
            <p>Description : {desc}</p>
            <img src={image} alt={title}/>
        </div>
    )
}

export default Card

// {
//     DataRoadMap.map((data, index) => (
//       <div key={index}>
//         <Card title={data.percentage} desc={data.title}/>
//       </div>
//   ))}

// const DataRoadMap = [{
//     percentage: '0%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   }, {
//     percentage: '10%',
//     title: 'Titre 1°',
//     content: 'Content 1°',
//   }, {
//     percentage: '20%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   }, {
//     percentage: '30%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   }, {
//     percentage: '40%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   }, {
//     percentage: '50%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   }, {
//     percentage: '60%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   }, {
//     percentage: '70%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   }, {
//     percentage: '80%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   },{
//     percentage: '90%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   },{
//     percentage: '100%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   }];