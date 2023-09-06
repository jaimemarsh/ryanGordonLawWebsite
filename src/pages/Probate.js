import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Foot from './components/Foot'
import Page from './components/PracticePage'

const probate = {
    title: 'Probate Fiduciary',
    definition: 'A Trust is a legal arrangement of ones property to a third party. Probate is the process through which a deceased persons property is administered and distributed.',
    services: [
    ]

}
const Probate = () => {
    const { title, definition, services } = probate;
    return (
        <div>
            <Navbar />
            <Page
                title={title}
                definition={definition}
                services={services} />

            <Foot />
            <Footer />
        </div >
    );
};

export default Probate;