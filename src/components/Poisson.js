import React from 'react';
import { PoissonList } from "../datas/PoissonList";
import "../styles/style.css";
const Poisson = () => {
    return (
        PoissonList.map((aliment) => 
        <div key={aliment.Nom} className='aliment'>
        
            <h3> {aliment.Nom} </h3>
            <img src={ aliment.Image }   />
            <p> KCALS : { aliment.Kcals }</p>
            <p> GLU : { aliment.Glucide } PROT : { aliment.Proteine } LIP : { aliment.Lipide }</p>
        </div>
    )
    );
};

export default Poisson;