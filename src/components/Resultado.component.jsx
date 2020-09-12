import React, {Fragment} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {TextoCotizacion, ResultadoCotizacion} from '../Styles/Main.styles';

const Resultado = ({cotizacion}) => {

    return ( 
        <Fragment>
            <ResultadoCotizacion>
                <TransitionGroup
                    component="span"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{ enter: 500, exit: 500 }}
                    >
                        <TextoCotizacion> 
                                El total es: <span>{cotizacion}</span>
                        </TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
        </Fragment>
     );
}
 
export default Resultado;