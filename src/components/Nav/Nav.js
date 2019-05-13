import React from './node_modules/react';
import './nav.css';

const Nav = props => (
    <ul className="nav">
        {
            props.list.map((element,index) => (
                <li key={index}>{element.text}</li>
            ))
        }
    </ul>
)

export default Nav;