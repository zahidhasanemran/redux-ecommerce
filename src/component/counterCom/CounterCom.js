import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../../e-store/actions/index'
import { FaAccessibleIcon } from "react-icons/fa";
import FooterIcon from '../ui/favIcon/footerIcon/FooterIcon';



class counterCom extends Component {

    // state = {
    //     count: 0
    // }


    render() {
        return (
            <div>
                <FooterIcon link="facebook.com" IconName={FaAccessibleIcon} fontClass="demo" />
                <p><strong> Counter : {this.props.counterState.count} </strong></p>
                <div>
                    <button onClick={() => this.props.onIncrement()}>Increment</button>
                    <button onClick={() => this.props.onDecrement()}>Decrement</button>
                    <button onClick={() => this.props.onReset()}>Reset</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        counterState: state.CounterReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type: actionTypes.Increment}),
        onDecrement: () => dispatch({type: actionTypes.Decrement}),
        onReset: () => dispatch({type: actionTypes.Reset})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(counterCom);