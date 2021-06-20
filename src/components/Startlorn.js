import React from 'react';
import bussines from '../img/skrinb.jpg'

const Startlorn = () => {
    return (
        <div className="containers">
            <div className="row classrow">
                <div className="col-md-6">
                    <div className="startnge">
                        <b className="b">Start earning</b> more with your business ...
                    </div>
                    <div className="start_an">
                        An Online educational website <br/> for Business Technologies
                    </div>
                </div>
                <div className="col-md-5 s_img">
                    <img className="start_img" src={bussines} alt="busines " />
                </div>
                
            </div>
        </div>
    );
};


export default Startlorn;