import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/Foot.css"

const Foot = () => {
    const phoneNumber = '614-224-7926';

    return (
        <div>
            <div className="columns section has-background-link has-text-white">
                <div className="column">
                    <h1 className="title is-size-3 mt-6 google-font-pd has-text-white">Law Office of <br></br><span className="title is-size-1 has-text-white">RYAN GORDON</span></h1>
                </div>
                <div className="column  m-6">
                    <h1 className="title google-font-pd has-text-white">Office Hours</h1>
                    <ul className="is-size-5">
                        <li>Monday-Friday</li>
                        <li>8:00AM - 5:00PM </li>
                        <li>Additional Hours by Appointment</li>
                    </ul>
                </div>
                <div className="column m-6">
                    <Link to="/ContactUs"><h1 className="title google-font-pd mb-5 has-text-white">Get in Touch</h1></Link>
                    <ul className="is-size-5">
                        <li>Phone: <a className="has-text-white" href={`tel:${phoneNumber}`}>614-224-7926</a></li>
                        <li>Email: ryangordon
                            @ryangordonlaw.com </li>
                    </ul>
                </div>
                <div className="column m-6">
                    <h1 className="title google-font-pd has-text-white">Address</h1>
                    <ul className="is-size-5">
                        <li>4921 McPartlan Ct.</li>
                        <li>Columbus, OH 43221 </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Foot;