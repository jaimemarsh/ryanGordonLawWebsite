import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Foot from './components/Foot'
import Page from './components/PracticePage'


const business = {
    title: 'Business Law',
    subtitle: 'From forming a new Business to making it run smoothly, we are here to help YOU',
    definition: 'Business Law is a section of enforceable rules that governs and protects the actions of individuals or companies (buyers and sellers) in commercial matters.',
    services: [
        'Forming new Businesses',
        'Contract Drafting and Negotiation',
        'Civil Litigation',
        'Settling Disputes',
        'Protection of Intellectual Property',
        'Licensing',
        'Estate and Succession Planning',
        'Handling Mergers and Acquisitions',
        'Employment-related Matters',
        'Workers Compensation',
        'Business Taxes',
        'Buy/Sell Transaction'
    ]

}


const Business = () => {
    const { title, subtitle, definition, services } = business;
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