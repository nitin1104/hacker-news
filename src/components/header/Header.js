import React from 'react';
import './Header.scss';

function Header () {
    return (
        <div className="header-bar">
            <ul className="links">
                <li className="logo-link">
                    <span className="logo"><img src="./y18.gif" alt="Logo" /></span>
                </li>
                <li className="link">
                    <button>top</button>
                </li>
                <li className="link">
                    <button >new</button>
                </li>
            </ul>
        </div>
    )
}

export default Header;