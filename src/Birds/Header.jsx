import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="header d-flex justify-content-between align-items-center">
            <div className="logo"></div>
            <div className="counter">Score 5</div>
        </div>
    )
}

export default Header;