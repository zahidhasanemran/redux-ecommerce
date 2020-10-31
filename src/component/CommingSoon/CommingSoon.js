import React from 'react';
import './CommingSoon.css'
import comImg from '../../assets/img/working.svg'


const CommingSoon = () => {
    return (
        <div className="commingSoon">
            <div className="img_wrapper">
                <img src={comImg} alt=""/>
            </div>
            <h5>Under Construction!</h5>
        </div>
    );
};

export default CommingSoon;