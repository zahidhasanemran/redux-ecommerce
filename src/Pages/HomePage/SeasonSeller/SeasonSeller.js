import React from 'react';
import style from './SeasonSeller.module.css';
function SeasonSeller(props) {
    return (
        <div className={`${style.banner_section} p-4 mt-4`}>
            <div
                className={`${style.banner_img} d-flex align-items-center flex-column justify-content-center`}>
                <p className={`${style.color_white} font-weight-bold `}>The Biggest Sale</p>
                <div className={`${style.border} mt-3 mb-3`}></div>
                <h1 className={`${style.color_white} font-weight-bold `}>WINTER SEASON</h1>
            </div>
        </div>
    );
}

export default SeasonSeller;