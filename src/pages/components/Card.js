import React from 'react';
import '../../css/Card.css';

function Card(props) {
    return (
        <div className="container is-max-desktop has-text-centered mt-6">
            <div className="card cardEffect">
                <div className="card-image cardEffect-image">
                    <picture>
                        <img src={props.image} alt={props.alt} />
                    </picture>
                    <div className="overlay">
                        <div className="description">
                            <p className="title has-text-white is-size-3 is-size-5-mobile m-3">{props.title}</p>
                            <p className="subtitle has-text-white mt-3">{props.subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className="card-content cardEffect-content">
                    <div className="content">
                        <h1>{props.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
