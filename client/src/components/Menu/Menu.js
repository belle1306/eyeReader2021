import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="ui two item menu">
            <NavLink className="item" to = "/">Home</NavLink>
            <NavLink className="item" to = "/author">Author</NavLink>
        </div>
    )
}

export default Menu;
