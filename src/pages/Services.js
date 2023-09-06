import React from 'react';
import Card from './components/Card'
import keys from '../images/keys.jpg'
import homeKeys from '../images/homeKeys.png'
import handshake from '../images/handshake.jpg'
import house from '../images/house.jpg'
import signature from '../images/signature.jpg'
import taxes from '../images/taxes.jpg'
import jury from '../images/jury.jpg'
import { Link } from 'react-router-dom';

const estatePlanning = {
    name: 'Estate Planning',
    image: homeKeys,
    alt: 'Keys in a Door',
    title: 'Estate Planning is the process by which an individual, or their family members, make arrangements in anticipation of passing away. ',
    subtitle: 'Click to Learn More',

}
const trust = {
    name: 'Estate and Trust Administration',
    image: signature,
    alt: 'Signing a Document',
    title: 'A Trust is ',
    subtitle: 'Click to Learn More',
}

const probate = {
    name: 'Probate Fiduciary and Commerical Litigation',
    image: keys,
    alt: 'Keys in a Door',
    title: 'Probate Fiduciary and Commerical Litigation is',
    subtitle: 'Click to Learn More',

}

const malpractice = {
    name: 'Attorney Malpractice',
    image: jury,
    alt: 'House',
    title: 'Attorney Malpractice is',
    subtitle: 'Click to Learn More',
}

const businessLaw = {
    name: 'Business Law',
    image: handshake,
    alt: 'Handshake',
    title: 'Business Law is a section of enforceable rules that governs and protects the actions of individuals or companies (buyers and sellers) in commercial matters.',
    subtitle: 'Click to Learn More',
}

const realEstate = {
    name: 'Real Estate Law',
    image: house,
    alt: 'House',
    title: 'Real Estate Law governs how people acquire and use property. It defines the rights and responsibilities a person has in reference to that ownership.',
    subtitle: 'Click to Learn More',
}

const tax = {
    name: 'Tax Law',
    image: taxes,
    alt: 'House',
    title: 'Tax Law is',
    subtitle: 'Click to Learn More',
}



const Services = () => {
    return (
        <div className="container is-max-widescreen section has-text-centered mt-6">

            <h1 className="is-size-1 google-font-pd is-size-2-mobile"><strong>OUR SERVICES</strong></h1>
            <discription className="google-font-ss is-size-4 is-size-5-mobile">
                <p>These are the areas of law we focus on and provide services for.</p>
                <p>Not sure where to start or what exactly you need?
                    <br></br><strong><Link to="/ContactUs"><u>Contact Us Today</u></Link></strong></p>
            </discription>

            <div className="">
                <Link to="/Estate">
                    <article className="">
                        <Card
                            image={estatePlanning.image}
                            name={estatePlanning.name}
                            title={estatePlanning.title}
                            subtitle={estatePlanning.subtitle}
                        />
                    </article>
                </Link>
            </div>

            <div className="tile is-ancestor google-font-ss">
                <div className="tile">

                    <div className="tile is-parent">
                        <Link to="/Trust">
                            <article className="tile is-child">
                                <Card
                                    image={trust.image}
                                    name={trust.name}
                                    title={trust.title}
                                    subtitle={trust.subtitle}
                                />
                            </article>
                        </Link>
                    </div>
                    <div className="tile is-parent">
                        <Link to="/Probate">
                            <article className="tile is-child">
                                <Card
                                    image={probate.image}
                                    name={probate.name}
                                    title={probate.title}
                                    subtitle={probate.subtitle} />
                            </article>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="tile is-ancestor google-font-ss">
                <div className="tile">

                    <div className="tile is-parent">
                        <Link to="/Mal">
                            <article className="tile is-child">
                                <Card
                                    image={malpractice.image}
                                    name={malpractice.name}
                                    title={malpractice.title}
                                    subtitle={malpractice.subtitle}
                                />
                            </article>
                        </Link>
                    </div>

                    <div className="tile is-parent">
                        <Link to="/RealEstate">
                            <article className="tile is-child">
                                <Card
                                    image={realEstate.image}
                                    name={realEstate.name}
                                    title={realEstate.title}
                                    subtitle={realEstate.subtitle} />
                            </article>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="tile is-ancestor google-font-ss">
                <div className="tile">
                    <div className="tile is-parent">
                        <Link to="/Business">
                            <article className="tile is-child">
                                <Card
                                    image={businessLaw.image}
                                    name={businessLaw.name}
                                    title={businessLaw.title}
                                    subtitle={businessLaw.subtitle}
                                />
                            </article>
                        </Link>
                    </div>

                    <div className="tile is-parent">
                        <Link to="/Tax">
                            <article className="tile is-child">
                                <Card
                                    image={tax.image}
                                    name={tax.name}
                                    title={tax.title}
                                    subtitle={tax.subtitle}
                                />
                            </article>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;