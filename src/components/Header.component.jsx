import React, { Fragment } from 'react';
import {ContenedorHeader, TextoHeader} from '../Styles/Main.styles';

const Header = ( { titulos }) => {
    return ( 
        <Fragment>
            <ContenedorHeader>
                <TextoHeader>
                    {titulos}
                </TextoHeader>
            </ContenedorHeader>
        </Fragment>
     );
}
 
export default Header;