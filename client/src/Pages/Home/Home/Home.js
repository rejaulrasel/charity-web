import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Gallery from '../../Gallery/Gallery';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Header></Header>
            <Banner></Banner>
            <HomeService></HomeService>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;
