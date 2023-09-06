import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Foot from './components/Foot'
import Page from './components/PracticePage'


const commercial = {
    title: 'Commercial Litigation',
    definition: '',
    services: [
       
    ]

}


const Business = () => {
    const { title, subtitle, definition, services } = commercial;
    return (
        <div>
            <Navbar />
            <Page
                title={title} subtitle={subtitle} definition={definition} services={services} />
            <Foot />
            <Footer />
        </div >
    );
};

export default Business;