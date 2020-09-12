import React, {Fragment, useState } from 'react';
import { Campo, Label, Select , InputRadio, Button, Error} from '../Styles/Main.styles';
import { yearDate, calcularMarca, planSeguro} from '../Utils/utils';

const Formulario = ({ setResumen, setCargando }) => {

    const [datos , setDatos ] = useState({
        marca : '',
        anio : '',
        plan : '',
    });

    const [ error, setError ] = useState(false);


    const { marca, anio, plan } = datos;

    const infoDatos = ( e ) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if(marca.trim() === '' || anio.trim === '' || plan.trim === '') {
            setError(true);
            return;
        }

        setError(false);

        let result              = 2000;
        const diferencia        = yearDate( anio );
        const incrementoPlan    = planSeguro( plan );
        result                  -= ( ( diferencia * 3 ) * result ) / 100;
        result                  = calcularMarca(marca) * result;
        result                  = parseFloat ( incrementoPlan * result ).toFixed(2);

        setCargando(true);

        setTimeout(() => {
            setCargando(false);
            setResumen({
                cotizacion : result,
                datos
            }) 
        }, 2000);
        
    }

    return ( 
        <Fragment>
            <form
                onSubmit={handleSubmit}
            >
                { error ? <Error> Todos los campos son obligatorios </Error> : null }
                <Campo>
                    <Label>Marca</Label>
                    <Select
                        name ="marca"
                        value={marca}
                        onChange = {infoDatos}
                    >
                        <option value="">-- Seleccione -- </option>
                        <option value="americano"> Americano </option>
                        <option value="europeo"> Europeo </option>
                        <option value="asiatico"> Asiatico </option>
                    </Select>
                </Campo>
                <Campo>
                    <Label>Año</Label>
                    <Select
                        name ="anio"
                        value={anio}
                        onChange = {infoDatos}
                    >
                        <option value="">-- Seleccione --</option>s
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label>Plan</Label>
                    <InputRadio  
                        type    ="radio"
                        name    ="plan"
                        value   ="basico"
                        checked = { plan === "basico" } 
                        onChange = {infoDatos}
                    />Básico
                    <InputRadio  
                        type    ="radio"
                        name    ="plan"
                        value   ="completo"
                        checked = { plan === "completo" } 
                        onChange = {infoDatos}
                    />Completo
                </Campo>
                <Button type="submit">Cotizar</Button>
            </form>
        </Fragment> 
    );
}
 
export default Formulario;