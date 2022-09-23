import React from 'react';
import { FeculentList } from "../datas/FeculentList";
const Feculent = () => {
    return (
        FeculentList.map((aliment) => 
        <div key={aliment.Nom} className='aliment'>
        
            <h3> {aliment.Nom} </h3>
            <img src={ aliment.Image }   />
            <p> KCALS : { aliment.Kcals }</p>
            <p> GLU : { aliment.Glucide } PROT : { aliment.Proteine } LIP : { aliment.Lipide }</p>
        </div>
    )
    );
};

export default Feculent;