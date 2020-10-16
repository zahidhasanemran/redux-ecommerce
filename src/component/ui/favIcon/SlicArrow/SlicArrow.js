import React, { Fragment } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './SlicArrow.module.css'

function SlicArrow({left}) {
    return (
        // <button type="button" className={left ? 'slick-arrow slick-prev' : 'slick-arrow slick-next'}>
        //     {left ? <FaAngleLeft /> : <FaAngleRight />}
        // </button>
        <Fragment>
            {left ? <FaAngleLeft /> : <FaAngleRight />}
        </Fragment>
    );
}

export default SlicArrow;