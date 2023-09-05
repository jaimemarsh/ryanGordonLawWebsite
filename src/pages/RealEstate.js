import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Foot from './components/Foot'
import Page from './components/PracticePage'

const realEstate = {
    title: 'Real Estate Law',
    definition: 'Real Estate Law covers the right to acquire land, use land, and enjoy land with additional man-made additions to it. It defines the rights and responsibilities a person has when owning that land and can directly or indirectly impact most people on a daily basis. This can include homeowners, renters, landlords, home buyers, home sellers, and more.',
    services: [
        'Residential and Commercial Real Estate transactions',
        'Private Party Mortgage Notes',
        'Easements and Right of Way',
        'Deeds',
        'Quiet Title Actions',
        'Partition Actions',
        'Cooperatives and Condominiums',
        'Drafting and Negotiating Contracts'
    ]
};

const RealEstate = () => {
    const { title, definition, services } = realEstate;
    return (
        <div>
            <Navbar />
            <Page title={title} definition={definition} services={services}/>
            <Foot />
            <Footer />
        </div >
    );
};

export default RealEstate;