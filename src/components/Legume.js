import React from 'react';
import { LegumeList } from "../datas/LegumeList";
import "../styles/style.css";

const Legume = () => {

    return (
        LegumeList.map((aliment) =>
        <div key={aliment.nom} className='aliment'>
            
                <h3> {aliment.nom} </h3>
                <img src={ aliment.Image }   />
                <p> KCALS : { aliment.Kcals }</p>
                <p> GLU : { aliment.Glucide } PROT : { aliment.Proteine } LIP : { aliment.Lipide }</p>
            </div>
                
        )
        
     );
};

export default Legume;
