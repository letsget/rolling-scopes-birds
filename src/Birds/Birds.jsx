import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common.css'
import Header from './Header';
import Nav from './Nav';
import BirdImage from './BirdImage';
import AudioPlayer from './AudioPlayer';
import SelectBird from './SelectBird';
import BirdInfo from './BirdInfo';
import Button from './Button';

class Birds extends Component {
    state = {
        message: 'Hello Birdie, let\'s work!'
    }


    render() {
        return (
            <div className="container">
                <Header />
                <Nav />
                <div className="row row-main" d-flex="true" align-items-center="true">
                    <BirdImage />
                    <AudioPlayer />
                </div>
                <div className="row mb2">
                    <SelectBird />
                    <BirdInfo />
                </div>
                <Button />
            </div>

        )
    }

}

export default Birds;