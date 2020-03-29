import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BirdImage = () => {
    return (
        <div style={{ width: '30%' }} className="random-bird jumbotron rounded">
            <img class="bird-image" src="https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg" alt="Ласточка"></img>
        </div>
    )
}

export default BirdImage;