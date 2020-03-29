import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    return (
        <ul className="pagination d-flex justify-content-between">
            <li className="page-item active"><a className="page-link" href="/#">Разминка</a></li>
            <li className="page-item"><a className="page-link" href="/#">Воробьиные</a></li>
            <li className="page-item"><a className="page-link" href="/#">Лесные птицы</a></li>
            <li className="page-item"><a className="page-link" href="/#">Певчие птицы</a></li>
            <li className="page-item"><a className="page-link" href="/#">Хищные птицы</a></li>
            <li className="page-item"><a className="page-link" href="/#">Морские птицы</a></li>
        </ul>
    )
}

export default Nav;