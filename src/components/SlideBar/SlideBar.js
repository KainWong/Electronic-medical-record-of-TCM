import React from 'react';
import './slideBar.css';

const SlideBar = props => (
    <ul className="nav">
        {
            props.list.map((element,index) => (
                <li key={index}>{element.text}</li>
            ))
        }
    </ul>
)

export default SlideBar;