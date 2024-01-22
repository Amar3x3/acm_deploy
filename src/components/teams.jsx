import React, { Component } from 'react';
import '../styles/main.css';
import '../scripts/animate';
import { Link } from 'react-router-dom';
const Teams = () =>{
    return<>
        <div className='uni-up-margin reveal'></div>
            <h1 className='title'> Our Team</h1>
            <div className='cards-list teams'>
                <div className='card red-back reveal-from-left'>
                    <div className='card-img'></div>
                    <div className='card-desc'>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum
                    </div>
                    <div className="">
                    <Link className="blue-btn" to='/news'>Read More</Link>
                </div>
                </div>

                <div className='card red-back reveal'>
                    <div className='card-img'></div>
                    <div className='card-desc'>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum
                    </div>
                    <div className="">
                    <Link className="blue-btn" to='/news'>Read More</Link>
                </div>
                </div>

                <div className='card red-back  reveal-from-right'>
                    <div className='card-img'></div>
                    <div className='card-desc'>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum
                    </div>
                    <div className="">
                    <Link className="blue-btn" to='/news'>Read More</Link>
                </div>
                </div>

                <div className='card red-back  reveal-from-left'>
                    <div className='card-img'></div>
                    <div className='card-desc'>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum
                    </div>
                    <div className="">
                    <Link className="blue-btn" to='/news'>Read More</Link>
                </div>
                </div>

                <div className='card red-back reveal'>
                    <div className='card-img'></div>
                    <div className='card-desc'>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum
                    </div>
                    <div className="">
                    <Link className="blue-btn" to='/news'>Read More</Link>
                </div>
                </div>

                <div className='card red-back  reveal-from-right'>
                    <div className='card-img'></div>
                    <div className='card-desc'>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum
                    </div>
                    <div className="">
                    <Link className="blue-btn" to='/news'>Read More</Link>
                </div>
                </div>

                <div className='card red-back  reveal'>
                    <div className='card-img'></div>
                    <div className='card-desc'>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum
                    </div>
                    <div className="">
                    <Link className="blue-btn" to='/news'>Read More</Link>
                </div>
                </div>
            </div>
    </>
}
export default Teams;