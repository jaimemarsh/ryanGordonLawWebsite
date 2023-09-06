import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Foot from './components/Foot';
import ryanGordon from '../images/ryanGordon.png';
import Form from './components/Form';
import "../css/About.css"

const About = () => {
    return (
        <div>
            <Navbar />

            <div className="section is-small">
                <h1 className="mb-6 about google-font-pd has-text-centered is-size-1-mobile"><strong><u>About</u></strong></h1>
                <div className="container mb-6">
                    <div className="columns">
                        <div className="column">
                            <img src={ryanGordon} alt="Ryan Gordon" />
                        </div>
                        <div className="column is-three-fifths">
                            <h1 className="title google-font-pd ">Ryan Gordon Esq., LL.M, LLC</h1>
                            <p className="google-font-ss">Ryan Gordon, located in central Ohio, is very familiar with the hardships and turmoil people
                                are facing today. Ryan comes from generations of educators who have dedicated their lives to helping others which inspired
                                him to do the same. Pursuing his education at The Ohio State University and Capital University Law School, Ryan Gordon wanted
                                to be an honest and trustworthy attorney for those who really need it. His expertise includes Estate Planning, Estate and Trust 
                                Administration, Prbate Fiduciary and Commerical Litigation, Attorney Lampractice Litigation, Business Law, Real Estate Lae, and Tax Law.</p>
                            <div className="columns mt-4">
                                <div className="column is-half">
                                    <h1 className="title google-font-pd">Education</h1>
                                    <ul>
                                        <li className="m-3">
                                            <p className="google-font-ss"><strong>Bachelor of Science in Mathematics and <br></br> Minor in Economics</strong></p>
                                            <p className="google-font-ss">The Ohio State University, 1993</p>
                                        </li>
                                        <li className="m-3">
                                            <p className="google-font-ss"><strong>Bachelor of Science in Actuarial Science</strong></p>
                                            <p className="google-font-ss">The Ohio State University, 1998</p>
                                        </li>
                                        <li className="m-3">
                                            <p className="google-font-ss"><strong>Juris Doctorate (JhD)</strong></p>
                                            <p className="google-font-ss">Capital University Law School, 2003</p>
                                        </li>
                                        <li className="m-3">
                                            <p className="google-font-ss"><strong>Masters of Tax Law (LL.M.)</strong></p>
                                            <p className="google-font-ss">Capital University Law School, 2004</p>
                                        </li>
                                        <li className="m-3">
                                            <p className="google-font-ss"><strong>Esquire (Esq.) Designation</strong></p>
                                            <p className="google-font-ss">Capital University Law School, 2004</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h1 className="title google-font-pd">Activities and Affiliations</h1>
                                    <ul className="disc">
                                        <li className="m-1">
                                            <p className="google-font-ss">Columbus Bar Association Member</p>
                                        </li>
                                        <li className="m-1">
                                            <p className="google-font-ss">The Ohio State Bar Association Member</p>
                                        </li>
                                        <li className="m-1">
                                            <p className="google-font-ss">Columbus Bar Association - estate and gift tax committee</p>
                                        </li>
                                        <li className="m-1">
                                            <p className="google-font-ss">AV Rated on Martindale-Hubbell</p>
                                        </li>
                                        <li className="m-1">
                                            <p className="google-font-ss">Wills for First Responders: Created for City of Columbus Firefighters department, City of
                                                Columbus Police department and, City of Columbus Sheriff's department</p>
                                        </li>
                                    </ul>
                                    <div className="column">
                                        <h1 className="title google-font-pd mt-2">Bar Admissions</h1>
                                        <ul className="disc">
                                            <li className="m-1">
                                                <p className="google-font-ss">Ohio License to Practice Supreme Court of Ohio: 2004-present</p>
                                            </li>
                                            <li className="m-1">
                                                <p className="google-font-ss">Federal Tax Court License to Practice</p>
                                            </li>
                                            <li className="m-1">
                                                <p className="google-font-ss"> US Federal Court Southern/ Northern District 6th circuit Federal License</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            < Form />

            <Foot />
            <Footer />

        </div>
    );
};

export default About;