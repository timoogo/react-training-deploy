// import Card from "./components/Card";
// import Logo from "./img/logo512.png";
// import RoadMap from './components/RoadMap';

import Rooter from "./route/Rooter";

function App() {

  // const user = {
  //   firstname: "Lorem",
  //   lastname: "ipsum"
  // }

  // Todo 1 :
  // Crée une fonction qui va concat firstname + lastname
  // Crée un composant qui va retourner la fonction avec "bonjour..."

  // function FormatName(user) {
  //   return user.firstname + ' ' + user.lastname;
  // }

  // const JsxExemple = () => {
  //   return (
  //     <>
  //       <p>Bonjour <b>{FormatName(user)}</b>;)</p>
  //     </>
  //   )
  // }

  // Todo 2 :
  // Crée un composant Card qui comprend les props suivante :
  // title (h1), desc (p), image (img (src+alt)), link (a (href+title))
  // <Card title="" desc="" image="" link=""/>


  // Todo 3 :
  // Crée un composant RoadMap qui comprend les props suivante :
  // percentage, title, content
  // À l'aide de votre array DataRoadMap, boucler sur votre composant


// const DataRoadMap = [{
//     percentage: '0%',
//     title: 'Titre 1',
//     content: 'Content 1',
//   }, {
//     percentage: '10%',
//     title: 'Titre 10°',
//     content: 'Content 10°',
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


  return ( 
    <>
    <Rooter/>
      {/* <JsxExemple/>
      <Card 
        title="Je suis un titre" 
        desc="Je suis une description" 
        image={Logo}
        link="https://google.com"
      />

      {console.table(DataRoadMap)}

      {
        DataRoadMap.map((data, index) => (
          <div key={index} style={
            {
              backgroundColor: "lightgray", 
              padding: "2%", 
              margin: "3%"
            }}>
              <RoadMap 
                percentage={data.percentage} 
                title={data.title}
                content={data.content}  
              />
          </div>
        ))
      } */}

    </>
  );
}

export default App;