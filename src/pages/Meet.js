import React from 'react';
import ryanGordon from '../images/ryanGordon.png'
import { Link } from 'react-router-dom';

const Meet = () => {
    return (
        <div className="container section is-small my-6 is-max-fullscreen has-text-centered">
            <div className="columns">
                <div className="column">
                    <img src={ryanGordon} alt="Ryan Gordon" />
                </div>
                <div className="column has-text-left">
                    <h1 className="title is-size-1 is-size-3-mobile google-font-pd mt-6">MEET RYAN GORDON</h1>
                    <h2 className="title google-font-pd is-size-4-mobile ">The right advocate for you </h2>
                    <p className="google-font-ss is-size-4 is-size-5-mobile has-text-justified">
                        <span className="google-font-pd is-size-3 is-size-4-mobile">Ryan Gordon</span> is an accomplished attorney with over twenty years of experience.
                        Ryan grew up seeing honest and hard-working people being taken advantage of, so he decided to do something about it. He has multiple degrees
                        from The Ohio State University and has built up years of experience to emerge as a respected and knowledgeable professional. Through his dedication to good
                        people, he has made significant contributions to Columbus. He has set himself apart as a true professional who cares not only about his clients,
                        but also his community.<br></br>
                        <strong><Link to="/About"> <u>Learn More</u></Link></strong>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Meet;