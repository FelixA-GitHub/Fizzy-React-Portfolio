import React from 'react';
// import PhotoList from '../PhotoList';
// import { capitalizeFirstLetter } from '../PhotoList/utils/helpers';
import portfolioImage from '../../assets/small/portfolio/0.jpg'

function Portfolio() {
    return (
        <section className='my-5'>
           <div onClick="">
                <div >
                    <h3>Data Mammoth</h3>
                    <img src={portfolioImage} width="300" height="200" alt="Data Mammoth Screenshot"/>
                    <h5>JavaScript/HTML</h5>
                </div>
                
                <div >
                </div>
                
            </div> 
        </section>
    )
};

export default Portfolio;