import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner (1).jpg'
import banner2 from '../../../images/banner (2).jpg'
import banner3 from '../../../images/banner (3).jpg'


const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item >
                    <img
                        style={{height:'75vh'}} 
                        className=" w-100"
                        src={banner1}
                        alt="Royal Enfield Classic 350"
                    />
                    <Carousel.Caption style={{color:"black"}}>
                        <h1>MAZDA Broncho</h1>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height:'80vh'}}
                        className="d-block w-100"
                        src={banner2}
                        alt="KTM RC 125"
                    />

                    <Carousel.Caption style={{color:"white"}}>
                        <h1>MAZDA PX 2021</h1>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height:'80vh'}}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{color:"white"}}>
                        <h1>MAZDA TW-120</h1>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;