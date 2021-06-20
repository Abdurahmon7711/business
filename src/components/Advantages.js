import React from 'react';
import learnthe from '../img/book1.jpg'
import get from '../img/man2.jpg';
import earn from '../img/earn.jpg';
import upskill from '../img/peoples4.jpg';

const Advantages = () => {
    return (
        <div className="containers">
            <h4 className="text-center advan">ADVANTAGES</h4>
            <div className="cards">

                <div className="card cb">
                    <div classNames="card-body ">
                        <img className="cbi" src={learnthe} alt="img"/>
                        <h5>Learn the
                        latest skills</h5>
                    </div>
                </div>
                <div className="card cb">
                    <div classNames="card-body">
                        <img className="cbi" src={get} alt="img"/>
                        <h5>Get ready
                        for a career</h5>
                    </div>
                </div>
                <div className="card cb ">
                    <div classNames="card-body">
                        <img className="cbi" src={earn} alt="img"/>
                        <h5>Earn
                        a degree</h5>
                    </div>
                </div>
                <div className="card cb">
                    <div classNames="card-body">
                        <img className="cbi" src={upskill} alt="img"/>
                        <h5>Upskill your
                        organization</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Advantages;