import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../img/banner.png';
import './Home.css'

const Home = () => {
    return (
        <div className='banner-container'>
            <div className='container py-5'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-6 pe-md-5 text-center text-md-start text-white'>
                        <h1 className='pe-lg-5 fw-bolder'>Welcome everyone to Quiz Campus</h1>
                        <p className='pe-lg-5 py-4'>The quiz competition is to assess the knowledge of academics as well as non-academic participants and familiarize them with the potential and objectivity of quizzes.</p>
                        <Link className='btn btn-ebebff py-2 px-4' to='/topics'>let's go</Link>
                    </div>
                    <div className='col-12 col-md-6 d-md-block d-none'>
                        <img src={banner} alt="banner" className=' img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;