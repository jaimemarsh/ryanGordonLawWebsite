import React from 'react';
import cbaBar from '../../images/cbaBar.png';
import osuAlumni from '../../images/osuAlumni.png';
import osuBar from '../../images/osuBar.png';
import "../../css/Hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced, faChess, faHandshake, faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero is-small is-link">
            <div className="google-font-ss hero-body">
                <h1 className="title is-size-1 mt-4 google-font-pd is-size-3-mobile has-text-centered">WHAT SETS RYAN GORDON APART?</h1>
                <div className="is-flex is-justify-content-center">
                    <div className="is-size-3 is-size-4-mobile fontawesome columns has-text-black">
                        <ul className="column">
                            <li className="hover-effect is-flex mt-5">
                                <FontAwesomeIcon icon={faScaleBalanced} size="xl" className="is-size-1 m-3" /> Expert Legal Advice and Assistance
                            </li>
                            <li className="hover-effect is-flex mt-5 ">
                                <FontAwesomeIcon icon={faPen} size="xl" className="is-size-1 m-3" /> Knowledgeable and Experienced
                            </li>
                        </ul>
                        <ul className="column">
                            <li className="hover-effect is-flex mt-5 ">
                                <FontAwesomeIcon icon={faChess} size="xl" className="is-size-1 m-3" /> Personalized Approach and Strategy
                            </li>
                            <li className="hover-effect is-flex mt-5 ">
                                <FontAwesomeIcon icon={faHandshake} size="xl" className="is-size-1 m-3" /> Trustworthy and Understanding
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-6 container is-max-widescreen">
                <p className="title has-text-centered is-size-1 is-size-3-mobile google-font-pd">AV RATED</p>
                <div className="columns">
                    <div className="column">
                        <p className="has-text-centered is-size-3 has-text-justified is-size-4-mobile google-font-ss has-text-black mx-4"><span className="google-font-pd is-size-2 is-size-3-mobile">Ryan Gordon</span> is viewed highly not
                            only by former clients, but his peers. Ryan has earned the AV rating, the highest and most respected badge an
                            attorney can earn from <Link to="https://www.martindale.com/attorney/mr-ryan-andrew-gordon-300548446/#profile-client-reviews"><span className="hover-effect"><u>Martindale-Hubbell</u></span></Link>. The AV badge means he rated high in all categories including legal knowledge, analytical
                            capability, judgment, communication, and legal experience. </p>
                    </div>
                </div>
            </div>
            <div className="hero-body">
                <p className="title has-text-centered is-size-1 is-size-3-mobile google-font-pd mt-6">ACCREDITATIONS</p>
                <div className="columns is-vcentered is-justify-content-space-between">
                    <div className="column m-6 hover-effect">
                        <Link to="https://www.cbalaw.org/"><img src={cbaBar} alt="Columbus Bar Association" /></Link>
                    </div>
                    <div className="column m-6 hover-effect">
                       <Link to="https://www.osu.edu/alumni/"><img src={osuAlumni} alt="OSU Alumni" /></Link>
                    </div>
                    <div className="column m-6 hover-effect">
                       <Link to="https://www.ohiobar.org/"> <img src={osuBar} alt="Ohio State Bar Association" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;