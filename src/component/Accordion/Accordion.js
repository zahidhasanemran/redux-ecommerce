import React, { useRef, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './Accordion.css';


const Accordion = (props) => {

    const [activeClass, setActiveClass] = useState("");
    const [scrollHeight, setScrollHeight] = useState("0px");

    const content = useRef(null);

    const toggleAccordion = () => {
        setActiveClass(activeClass === '' ? 'active' : '');
        setScrollHeight(activeClass === '' ? `${content.current.scrollHeight}px` : '0px');
    }


    return (
        <div className="accordion__section">
            <button className={`accordion ${activeClass}`} onClick={toggleAccordion}>
                <p className="accordion__title"> {props.title} </p>
                <p> {activeClass ? <FaMinus /> : <FaPlus />}   </p>
            </button>
            <div ref={content} style={{maxHeight: `${scrollHeight}`}} className="accordion__content">
                <div 
                    className="accordion__text"
                    dangerouslySetInnerHTML = {{__html: props.content}}
                    >

                </div>
            </div>
        </div>
    );
};

export default Accordion;