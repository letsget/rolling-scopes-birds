import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common.css'
import Header from './Header';
import Nav from './Nav';
import BirdImage from './BirdImage';
import AudioPlayer from './AudioPlayer';

class Birds extends Component {
    state = {
        message: 'Hello Birdie, let\'s work!'

    }


    render() {
        return (
            <div className="container">
                <Header />
                <Nav />
                <div className="row" d-flex align-items-center>
                    <BirdImage />
                    <AudioPlayer />
                </div>
            </div>

        )
    }

}

export default Birds;