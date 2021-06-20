import React from 'react';
import Howto from '../img/howto.png';
import the from '../img/Thecsience.png';
import smm from '../img/SMM.png';
import creating from '../img/Creating.png'
const OurCourse = () => {
    return (
        <div className="containers">
            <div className="our_course">
                <h4 >OUR COURSE</h4>
                <div className="cards_ourC">
                    <div className="rows">
                        <div className="card">
                            <div className="card-header">
                                <img src={Howto} alt="img" />
                                <div className="card_text__our">
                                    <h6>How to Start Your Own Business</h6>
                                    <p>In this Specialization, you’ll develop basic literacy in the language of business...</p>
                                    <button type="button" className="cbtn">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <img src={the} alt="img" />
                                <div className="card_text__our">
                                    <h6>The Science of Well-Being</h6>
                                    <p>In this course you will engage in a series of challenges designed to increase...</p>
                                    <button type="button" className="cbtn">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <img src={smm} alt="img" />
                                <div className="card_text__our">
                                    <h6>SMM</h6>
                                    <p> Social platforms can be likened to a magical scene, where everyone...</p>
                                    <button type="button" className="cbtn">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <img src={creating} alt="img" />
                                <div className="card_text__our">
                                <h6>Creating telegram bot</h6>
                                <p> In this 1-hour long project-based course, you will learn...</p>
                                <button type="button" className="cbtn">LEARN MORE</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default OurCourse;