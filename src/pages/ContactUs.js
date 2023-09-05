import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form'
import Footer from './components/Footer'
import Foot from './components/Foot'
import '../css/ContactUs.css'
import { Link } from 'react-router-dom';

const Contact = () => {
    const phoneNumber = '614-224-7926';
    return (
        <div className="">
            <Navbar />
            <div className="is-max-widescreen container">
                <h1 className="google-font-pd contactUs is-size-1-mobile has-text-centered mt-4"><u>Contact Us</u></h1>
                <div className="columns">
                    <div className="column is-three-quarters">
                        <Form />
                    </div>
                    <div className="column mt-6 info">
                        <div className="my-6">
                            <h1 className="title google-font-pd">Office Hours</h1>
                            <ul className="is-size-5">
                                <li>Monday-Friday</li>
                                <li>8:00AM - 5:00PM </li>
                                <li>Additional Hours by Appointment</li>
                            </ul>
                        </div>
                        <div className="my-6">
                            <Link to="/ContactUs"><h1 className="title google-font-pd mb-5">Phone and Email</h1></Link>
                            <ul className="is-size-5">
                                <li>Phone: <a className="" href={`tel:${phoneNumber}`}>614-224-7926</a></li>
                                <li>Email: ryangordon@ryangordonlaw.com </li>
                            </ul>
                        </div>
                        <div className="my-6">
                            <h1 className="title google-font-pd">Address</h1>
                            <ul className="is-size-5">
                                <li>4921 McPartlan Ct.</li>
                                <li>Columbus, OH 43221 </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <Foot />
            <Footer />
        </div >
    );
};

export default Contact;