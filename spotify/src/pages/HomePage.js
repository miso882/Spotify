import React from 'react';
import Footer from '../components/footer';
import Navicationbar from '../components/navbar';
import Topbar from '../components/topbar';
import Home from '../components/homepage';

const HomePage = () => {
    return (
        <div className='flex'>
            <Navicationbar />
            <div>
            <Topbar />
            <Home />
            <Footer />
            </div>
        </div>
    )
}

export default HomePage;