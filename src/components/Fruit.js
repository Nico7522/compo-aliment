import React from 'react';
import { FruitList } from "../datas/FruitList";
import "../styles/style.css";
const Fruit = () => {
    return (
        FruitList.map((aliment) => 
            <div key={aliment.Nom} className='aliment'>
            
                <h3> {aliment.Nom} </h3>
                <img src={ aliment.Image }   />
                <p> KCALS : { aliment.Kcals }</p>
                <p> GLU : { aliment.Glucide } PROT : { aliment.Proteine } LIP : { aliment.Lipide }</p>
            </div>
        )
    );
};

export default Fruit;