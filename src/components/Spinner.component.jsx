import React, { Fragment } from 'react'
import '../Css/Spinner.css';
import {SpinnerDiv} from '../Styles/Main.styles';
const Spinner = () => {
    return ( 
        <Fragment>
            <SpinnerDiv>
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div> 
            </SpinnerDiv>
        </Fragment>
     );
}
 
export default Spinner;