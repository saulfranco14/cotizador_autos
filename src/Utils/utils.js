
// Diferencia de años 
export function yearDate( anio ) {
    return new Date().getFullYear() - anio;
}

//Calcular marca
export function calcularMarca( marca ){

    let incremento = 0.0 ;

    switch( marca ) {
        case 'americano':
            incremento = 1.15;
            break;
        case 'europeo': 
            incremento = 1.30;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        
        default:
            break;
    }

    return incremento;
}

export function planSeguro( plan ) {
    return ( plan === 'basico' ) ? 1.20 : 1.50;
}

export function upperWord( text ) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}