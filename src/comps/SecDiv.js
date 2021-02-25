import React, { useEffect } from 'react';
import AOS from 'aos';
import './SecDiv.css';

const SecDiv = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
    }, [])
    return (
        <>
            <div className='SecDiv' data-aos='fade-up'>
                <div className="secGrid" data-aos='fade-down'>
                    <div className="grid">
                        <i className='fas fa-child'></i>
                        <div className="decription">
                            <h3>Are you looking for Home Tutors!</h3>
                            <p>Private tutors provide one-on-one educational assistance</p>
                            <p>to elementary and secondary school students or to adults.</p>
                        </div>
                    </div>
                    <div className="grid">
                        <i className='fas fa-male'></i>
                        <div className="decription">
                            <h3>Are you looking for Home Tutions!</h3>
                            <p>Private tutors provide one-on-one educational assistance</p>
                            <p>to elementary and secondary school students or to adults.</p>
                        </div>
                    </div>
                    <div className="grid">
                        <i className='fas fa-laptop-house'></i>
                        <div className="decription">
                            <h3>Connect with Us</h3>
                            <p>Private tutors provide one-on-one educational assistance</p>
                            <p>to elementary and secondary school students or to adults.</p>
                        </div>
                    </div>
                    <div className="grid">
                        <i className='fas fa-book'></i>
                        <div className="decription">
                            <h3>Get the best teacher</h3>
                            <p>Private tutors provide one-on-one educational assistance</p>
                            <p>to elementary and secondary school students or to adults.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecDiv;
