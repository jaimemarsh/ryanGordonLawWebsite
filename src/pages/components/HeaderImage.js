import React from 'react';
import columbus_skyline from '../../images/columbus_skyline.jpg';
import "../../css/Header.css";

const BackgroundImage = () => {
    return (
        <div className="headerImage">
            <div className="card">
                <figure className="image is-3by1 is-fullwidth">
                    <picture>
                        <img className="card-image" src={columbus_skyline} alt="columbus_skyline" />
                    </picture>
                </figure>
                <div className="card-content is-overlay mt-6">
                    <div className="centered-content has-text-centered">
                        <p className="image-subtitle google-font-pd is-size-1 is-size-4-mobile">The Law Office of </p>
                        <h1 className="image-title google-font-pd is-size-3-mobile">RYAN GORDON</h1>
                        <p className="image-subtitle google-font-pd is-size-1 is-size-4-mobile">Esq., LL.M, LLC </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundImage;
