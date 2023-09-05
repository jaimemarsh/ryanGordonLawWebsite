import React from 'react';
import "../../css/PracticePage.css";
import Form from './Form'
import { Link } from 'react-router-dom';

function Page(props) {

    return (
        <div className="section">
            <div className="container is-max-desktop">
                <div className="has-text-centered">
                    <h1 className="google-font-pd is-size-1-mobile headings"><u>{props.title}</u></h1>
                    {/* <h1 className="title is-size-3 google-font-pd">{props.subtitle}</h1> */}
                </div>
                <div className="container">
                    {/* <div>
                        <h1 className="title google-font-pd mt-6">What is it?</h1>
                        <p className="is-size-4 is-size-5-mobile">{props.definition}</p>
                    </div> */}

                    <div className="section google-font-ss">
                        <h1 className="title google-font-pd">Services Offered</h1>
                        <div className="columns is-multiline">
                            <div className="column is-half">
                                <div>
                                    <ul className="is-size-4 is-size-5-mobile disc">
                                        {props.services.slice(0, Math.ceil(props.services.length / 2)).map((service, index) => (
                                            <li key={index}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div>
                                    <ul className="is-size-4 disc is-size-5-mobile">
                                        {props.services.slice(Math.ceil(props.services.length / 2)).map((service, index) => (
                                            <li key={index}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form />
                <section className="section is-small">
                    <h1 className="is-size-1 is-size-3-mobile google-font-pd has-text-centered">Don't see a service listed? <Link to="/ContactUs">Contact Us</Link> Today!</h1>
                </section>
            </div>
        </div>
    );
}

export default Page