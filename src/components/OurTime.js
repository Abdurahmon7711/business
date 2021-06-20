import React from 'react';
import mana from '../img/man_g.png';
import man2 from '../img/manwhite.png';
import man3 from '../img/manBlask.png';

const OurTime = () => {
    return (
        <div className="containers">
            <div>
                <h4 className="mb-3"> OUR TIME</h4>
                <div className="row row_our__time">
                    <div className="col-md-6 position">
                        <span className="span1 univers"></span>
                        <span className="span2 univer2"></span>
                        <img src={mana} alt="img" />
                    </div>
                    <div className="col-md-6 p-4 pt-0 ">

                        <h5>Alan Jonson</h5>
                        <p className="oTimeP">iMBA Graduate, University of Illinois <br />
                            Gies College of Business</p>
                        <span className="span_line"></span>
                        <p>It’s a really big deal to offer an online MBA that’s a real MBA at a price that’s achievable. This program is totally disrupting higher education.</p>
                        <button className="out_btn">LEARN MORE</button>
                    </div>
                </div>

                <div className="row row_our__time">
                    <div className="col-md-6 p-4 pt-0">
                        <h5>Michael Harrison </h5>
                        <p className="oTimeP">IBM Data Science Professional Certificate Alumna</p>
                        <span className="span_line"></span>
                        <p>Recruiters saw my Professional Certificate on my LinkedIn profile. During the interview, they told me they were impressed with the skills I learned. I got the job!</p>
                        <button className="out_btn">LEARN MORE</button>
                    </div>
                    <div className="col-md-6 position">
                        <span className="span3 univer2"></span>
                        <span className="span4 univers"></span>
                        <span className="span5 univer2"></span>
                        <img src={man2} alt="img" />
                    </div>
                </div>

                <div className="row row_our__time">
                    <div className="col-md-6 position">
                        <span className="span6 univer2"></span>
                        <span className="span7 univers"></span>
                        <span className="span8 univer2"></span>
                        <img src={man3} alt="img" />
                    </div>
                    <div className="col-md-6 p-4 pt-0">
                        <h5>Julio Riley</h5>
                        <p className="oTimeP">Web Developer</p>
                        <span className="span_line"></span>
                        <p>Social platforms can be likened to a magical scene, where everyone, using ready-made props and a stage, can stage their production for almost free and invite user viewers with good chances...</p>
                        <button className="out_btn">LEARN MORE</button>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default OurTime;