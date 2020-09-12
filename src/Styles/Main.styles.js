import styled from '@emotion/styled';

export const ContenedorHeader = styled.header`
  background-color  : #26C6DA;
  padding           : 10px;
  font-weight       : bold;
  color             : #FFFFFF;
`;

export const TextoHeader = styled.h1`
  font-size         : 2rem;
  margin            : 0;
  font-family       : 'Slabo 27px', serif;
  text-align        : center;
`

export const Contenedor = styled.div`
  width             : 600px;
  margin            : 0 auto;
  margin-top: 6%;
`

export const ContenedorFormulario = styled.div`
  background-color  : #fff;
  padding           : 3rem;
`
export const Campo = styled.div`
  display : flex;
  margin-bottom : 1rem;
  align-items : center;
`

export const Label = styled.label`
  flex : 0 0 100px;
`

export const Select = styled.select`
  display : block;
  width : 100%;
  padding : 1rem;
  border : 1px solid #e1e1e1;
  -webkit-appearance : none;
`
export const InputRadio = styled.input`
  margin: 0 1rem;
`

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  color : #fff;
  text-transform : uppercase;
  font-weight : bold;
  border : none;
  background-color: #00838F;
  transition : background-color .3s ease;
  margin-top : 2rem;
  
  &:hover{
    cursor : pointer;
    background-color : #26C6DA;
  }
  
`

export const Error = styled.div`
  background-color : #ec4646;
  color : white;
  padding : 1rem;
  width : 100%;
  text-align : center;
  margin-bottom : 2rem;
`

export const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align : center;
  background-color : #00838F;
  color : #fff;
  margin-top : 1rem;
`

export const TextoCotizacion = styled.div`
  color: #00838F;
  padding : 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`

export const MensajeInicio = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding : 1rem;
  text-align : center;
  font-weight : bold; 
`

export const ResultadoCotizacion = styled.div`
  text-align : center;
  padding : .5rem;
  border: 1px solid #26C6DA;
  background-color : rgb(127,224,237);
  margin-top : 1rem;
  position: relative;
`

export const SpinnerDiv = styled.div`
  display : flex ;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding : 3rem;
`