import React from 'react';
import program1 from  '../../images/GALLERY/program (1).jpeg'
import program2 from  '../../images/GALLERY/program (1).jpg'
import program3 from  '../../images/GALLERY/iStock-540095978.jpg'
import program4 from  '../../images/GALLERY/program (5).jpg'
import program5 from  '../../images/GALLERY/program (6).jpg'
import program6 from  '../../images/GALLERY/program (7).jpg'

const Gallery = () => {
    return (

        <div>
            <h1 className='text-secondary text-center mb-5'>OUR PROGRAMS</h1>
            <div className='row g-0'>
            
            <div className="col-4">
                <img className='img-fluid' src={program1} alt="" />
            </div>
            <div className="col-4">
                <img className='img-fluid' src={program2} alt="" />
            </div>
            <div className="col-4">
                <img className='img-fluid' src={program3} alt="" />
            </div>
            <div className="col-4">
                <img className='img-fluid' src={program4} alt="" />
            </div>
            <div className="col-4">
                <img className='img-fluid' src={program5} alt="" />
            </div>
            <div className="col-4">
                <img className='img-fluid' src={program6} alt="" />
            </div>
            
        </div>
        </div>
    );
};

export default Gallery;