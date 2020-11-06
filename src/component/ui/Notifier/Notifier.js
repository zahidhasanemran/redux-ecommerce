import { set } from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { FaEnvelopeOpen, FaTimesCircle } from 'react-icons/fa';
import { Transition } from 'react-transition-group';
import style from './Notifier.module.css'


const Notifier = (props) => {

    // console.log(props);

    const duration = 500;

        const defaultStyle = {
        transition: `opacity ${duration}ms ease`,
            opacity: 0,
        }

        const transitionStyles = {
            entering: { 
                opacity: 1
            },
            entered:  { 
                opacity: 1
            },
            exiting:  { 
                opacity: 0
            },
            exited:  { 
                opacity: 0
            },
        };

        const [show, setShow] = useState(Boolean(props.show))

        const dissmis = () => {
            setShow(!show)
        }

    
    return (
        <Transition in={show}  timeout={duration} mountOnEnter unmountOnExit>

            {state => (
                    <div className="container px-0" style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                        
                    }}>
                        <div className={style.Notifier} onClick={dissmis}>
                            <div className="text-right border-bottom">
                                {/* <p><FaEnvelopeOpen /> </p> */}
                                <p><FaTimesCircle style={{color: 'red'}}></FaTimesCircle></p>
                            </div>
                            <div>
                                <p>{props.children || props.text} </p>
                            </div>
                        </div>
                    </div>
            )}
            
        </Transition>
        
    );
};

export default Notifier;