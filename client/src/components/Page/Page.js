import React from 'react';
import HeaderMenu from '../Menu/Menu';

const Menu = (props) => {
    return (
        <div>
            <HeaderMenu />
            <div className="ui container">
                {props.children}
            </div>
        </div>
    )
}

export default Menu;
