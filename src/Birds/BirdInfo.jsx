import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BirdImage from './BirdImage';
import AudioPlayer from './AudioPlayer';
import BirdDesciption from './BirdDescription';

const BirdInfo = () => {
    return (
        <div className="col-md-6">
            <div className="row row-info" d-flex>
                <BirdImage />
                <AudioPlayer />
            </div>
            <div className="description"><BirdDesciption /></div>
        </div>

    )
}

export default BirdInfo;