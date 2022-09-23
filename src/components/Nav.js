import React, { useState } from 'react';

const Nav = ( { Active, setActive } ) => {

    const  [Click, setClick] = useState(false);
   
    
    return (
        <div>
            <nav className={ Click ? "active" : ""}>
        <a onClick={() => setActive("Légumes")}>Légumes</a>
        <a onClick={() => setActive("Fruits")}>Fruits</a>
        <a onClick={() => setActive("Viandes")}>Viandes</a>
        <a onClick={() => setActive("Poissons")}>Poissons</a>
        <a onClick={() => setActive("Féculents")}>Féculents</a>
    </nav>
    <button type="button" aria-label="toggle curtain navigation" onClick={() => Click ? setClick(false) : setClick(true) } className={Click ? "nav-toggler active" : "nav-toggler"}>
        <span className="line l1"></span>
        <span className="line l2"></span>
        <span className="line l3"></span>
    </button>
        </div>
    );
};

export default Nav;
