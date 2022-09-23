import "./styles/style.css";
import React, { useState }  from 'react';
import  Legume  from "./components/Legume";
import Nav from './components/Nav';
import Fruit from './components/Fruit';
import Viande from './components/Viande';
import Poisson from './components/Poisson';
import Feculent from './components/Feculent';



const App = () => {

  const [Active, setActive] = useState('');
  let affichage;
  if (Active === "Fruits") {
    affichage = <Fruit />
  } else if (Active === "Légumes") {
    affichage = <Legume />
  } else if (Active === "Viandes") {
    affichage = <Viande />
  } else if (Active=== "Poissons") {
    affichage = <Poisson />
  }  else if (Active === "Féculents") {
    affichage = <Feculent />
  } else {
    affichage = <Legume />
  }

  return (
      <div>
        <Nav 
        Active={Active}
        setActive={setActive}  />
        <h1>{Active}</h1>
            <div className='container'>
            {affichage}
            
            
           
            
               
                
            </div>
      
      </div>
  );
};

export default App;

