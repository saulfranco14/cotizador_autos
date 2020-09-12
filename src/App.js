import React, {Fragment, useState } from 'react';
import Header from './components/Header.component'
import {Contenedor, ContenedorFormulario, MensajeInicio} from './Styles/Main.styles';
import Formulario from './components/Formulario.component';
import Resumen from './components/Resumen.component';
import Resultado from './components/Resultado.component';
import Spinner from './components/Spinner.component';


function App() {

  const [ resumen , setResumen ]  = useState ({ cotizacion : 0 });
  const [ cargando, setCargando ] = useState(false);
  const {cotizacion, datos }      = resumen;

  return (
  
    <Fragment>
      <Contenedor>
        <Header
          titulos="Cotizador de seguros"
        />
        <ContenedorFormulario>
          <Formulario
            setResumen  = { setResumen }
            setCargando = { setCargando }
          />
         
          { datos ?  
            <Fragment>
              { cargando ? <Spinner/> : 
              
                <div>
                  <Resumen
                    datos = { datos }
                  /> 
                  <Resultado
                    cotizacion = {cotizacion}
                  />
                </div>
              } 
             
           
            </Fragment>
            :
               <MensajeInicio>Indica marca, año y plan </MensajeInicio>
          } 
        </ContenedorFormulario>
      </Contenedor>
    </Fragment>
  );
}

export default App;
