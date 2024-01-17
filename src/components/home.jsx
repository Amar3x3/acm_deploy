import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from './about';
import Event from './events'
import Teams from './teams';

const  Home =()=>{
    return<>
    <div className="uni-up-margin"></div>
    <div className="mega-cont-home-2 home">
        <div className="overlay-left-acm-home"></div>

        <div className="text-cont-home">
            <p className="title-home-banner">
            PVGCOET <br/> ACM Student <br /> Chapter
            </p>
            <p className="text">
            lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ipsum
            </p>
            <div className="two-btns-home">
                <div className="">
                    <Link className="blue-btn" to='whyjoin'>Why Join</Link>
                </div>
                <div className="">
                    <Link className="light-btn" to='/news'>Newsletter</Link>
                </div>
            </div>
        </div>

        <div className="slider-cont-home">
            <div className="slider"></div>
        </div>
        <div className="overlay-curly-design-home"></div>
    </div>

    

<div id='#event'>
<Event/>
</div>

    <div id='#team'>
        <Teams/>
    </div>

    <div id='#about'>
        <About/>
    </div>
    
    </>
}
export default Home;