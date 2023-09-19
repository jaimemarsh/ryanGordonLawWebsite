import React from 'react';
import "../css/Intro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faCalendar, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Intro = () => {
    const phoneNumber = '614-224-7926';
    return (
        <div>
            <div className="container has-text-centered mt-6">
                <h1 className="title is-size-1 google-font-pd is-size-3-mobile welcome">Welcome to the<br></br> Law Office of <br></br><span className="is-size-1-mobile"><strong>Ryan Gordon</strong></span>
                    <br></br><span className="is-size-4-mobile is-size-3">ESQ., LLM, LLC</span></h1>

                <p className="google-font-ss is-size-2 is-size-5-mobile">Our services include:<br></br>
                    <Link to="/Estate"> Estate Planning</Link>,
                    <Link to="/Trust"> Estate and Trust Administration</Link>,
                    <Link to="/Probate"> Probate Civil Litigation</Link>,
                    <Link to="/Commercial"> Business Litigation</Link>,
                    <Link to="/Mal"> Attorney Malpractice Litigation</Link>,
                    <Link to="/Business"> Business Law</Link>,
                    <Link to="/RealEstate"> Real Estate Law</Link>, and <Link to="/Tax"> Tax Law</Link>.
                </p>
            </div>
            <div className="is-size-2 has-text-centered google-font-pd is-size-4-mobile m-4">
                <div className="phone"><a href={`tel:${phoneNumber}`}><FontAwesomeIcon icon={faPhone} size="sm" className="is-size-3 mr-4" />Call Today</a> </div>
                <div className="mt-3"><Link to="/ContactUs"><FontAwesomeIcon icon={faCalendar} size="sm" className="is-size-3 mr-4" />Book A Consult</Link></div>
                <div className="mt-3"><Link to="https://www.lawyers.com/clientrating/fillSurvey?attyId=300548446"><FontAwesomeIcon icon={faStar} size="sm" className="is-size-3 mr-4" />Leave a Review</Link></div>
            </div>
        </div >
    );
};

export default Intro;