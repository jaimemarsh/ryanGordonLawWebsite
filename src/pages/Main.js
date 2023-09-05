import React from 'react';
import Navbar from './components/Navbar';
import BackgroundImage from './components/HeaderImage';
import Intro from './Intro'
import Hero from './components/Hero';
import Services from './Services'
import Meet from './Meet'
import Form from './components/Form'
import Footer from './components/Footer'
import Foot from './components/Foot'


const Main = () => {
    return (
        <div>
            <Navbar />
            <BackgroundImage />
            <Intro />
            <Meet /> 
            <Hero />
            <Services />
            <Form />
            <Foot />
            <Footer />
        </div >
    );
};

export default Main;