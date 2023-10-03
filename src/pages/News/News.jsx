/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Shared/Header/Header';
import { useParams } from 'react-router-dom';
import RightNav from '../Shared/RightNav/RightNav';
import Navbar from '../Shared/Navbar/Navbar';

const News = () => {
    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className='col-span-3'>
                    <h2 className="text-4xl">
                        News Details
                    </h2>
                </div>
                <div className='col-span-1'>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default News;