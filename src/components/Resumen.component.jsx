import React from 'react';
import  {ContenedorResumen}  from "../Styles/Main.styles";
import  { upperWord } from '../Utils/utils';

const Resumen = ( { datos }) => {

    const { marca, anio, plan } = datos;
    return ( 
        <ContenedorResumen>
            <h2> Resumen de cotización </h2>
            <ul>
                <li> Marca  :  { upperWord( marca ) } </li>
                <li> Plan   : { upperWord( plan ) } </li>
                <li> Año del auto: { upperWord( anio ) } </li>
            </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;