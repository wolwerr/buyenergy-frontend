import styled from "styled-components";
//Content of main 
export const ContainerItems = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 33px 0;
`
export const Tittle = styled.h1`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size:  2.312em;
    line-height: 43px;
    text-align: center;
    color: #434E65;
;
`
export const SubTittle = styled.p`
    margin-top: 35px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size:  1.562em;
    line-height: 29px;
    color: #434E65;
`
export const Phrase = styled.p`
    margin-top: 33px;   
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25em;
    line-height: 23px;
    color: #434E65;
`
//Form. // Por favor revisar essas alterações e sugerir melhorias, ^^)
export const Form = styled.form`
    /*Global Div css*/
    width: 530px;
    margin: auto;
    padding: 62px;
    /*Global Div css*/
    div{
        align-items: center;
        flex-direction: column;
        margin-bottom: 15px;
    }
    h2{
        color: #434E65;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 1.312em;
        line-height: 24px;
    }
    img{
        width: 35px;
        margin-right: 7px;
    }
    input{
        height: 45px;
        width: 87.55%;  
        border-radius: 6px;
        border: none;
    }
    div.coment{
        margin-top: 52px;
    }
    textarea{
        width: 95.7%;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 6px;
        border: none;
        resize: none;
    }
    button{
        background-color: #434E65;
        color: white;
        height: 44.32px;
        width: 50.75%;
        border-radius: 10px;
        border: none;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size:  1.5em;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    div.formulario{
        width: 100%;
        text-align: start;
    }
    div.coment{
        width: 100%;
        text-align: start;
    }
    .button-container{
        text-align: right;
        margin-top: 38px;
        width: 507px;
    }
    .input-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
    .input-container input {
        box-sizing: border-box;
        padding: 5px 10px;
    }
    .text{
        margin-bottom: 16px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`
//Nota: mudei as unidades de medida do font-size dos textos de 'rem' para 'em'
//mas, ainda há algumas unidades como 'line-height' que ainda estão em pixels.
// Os inputs de texto agora estão nas medidas corretas.