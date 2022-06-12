import React from 'react';
import AboutUs from './About';
import ContactUs from './ContactUs';
import Home from './Home';
import Services from './services';

const MainPage = () => {
    return(
        <>
        <Home />
        <AboutUs />
        <Services />
        <ContactUs />
        </>
    );
}

export default MainPage;