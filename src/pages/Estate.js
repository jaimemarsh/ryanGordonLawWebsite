import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Foot from './components/Foot'
import Page from './components/PracticePage'

const estate = {
    title: 'Estate Planning',
    definition: 'Estate Planning is the process to make arrangements of ones assets of wealth or ownership in anticipation of passing away. This can be done by an individual, or family members, and is not meant to be frustrating or stressful. We can help with any and all concerns you have.',
    services: [
        'Wills',
        'Living Wills',
        'Living Trusts',
        'Irrevocable Trusts',
        'Charitable Trusts',
        'Special Needs Trust Planning',
        'Powers of Attorney (Medical and Financial)',
        'Declaration of Guardian',
        'Asset Protection Planning'
    ]
};

const Estate = () => {
    const { title, definition, services } = estate;

    return (
        <div>
            <Navbar />
            <Page title={title} definition={definition} services={services} />
            <Foot />
            <Footer />
        </div>
    );
};
export default Estate;