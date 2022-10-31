import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainStyle = styled.div`
  height: 80vh;
  margin: 50px;
  display: grid;
  grid-template-areas:
  "amarelo lateral"
  "grafico lateral"
  "grafico lateral"
  "grafico botaoIndicacao";
  grid-template-columns: 7fr 3fr;
  grid-template-rows: 100;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  align-content: space-between;

  @media(max-width: 1400px) {
    margin: 30px;
  }
`
/* inicio container lateral*/
export const DivBarraLateral = styled.div`
  grid-area: lateral;
  border-radius: 2.5em;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  color: #434e65;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Ubuntu;
  padding: 30px 20px;
  max-width: 300px;
  height: 700px;

  @media(max-width: 1400px) {
    height: 550px;
  }
  h1 {
    text-transform: uppercase;

    @media(max-width: 1400px) {
      font-size: 1.5rem;
    }
  }
  h2 {
    color: #434e65;
    margin-bottom: 10px;

    @media(max-width: 1400px) {
      font-size: 1.3rem;
    }
  }
  h3 {
    font-size: 1.5rem;
    background: #f5b203;
    border-radius: 20px;
    width: 220px;
    padding: 10px 5px;
    text-align: center;
    margin: auto;
    color: white;
    margin-bottom: 10px;
  }
`
export const BotaoAmareloContainer = styled.div`
  grid-area: amarelo;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
`
export const Grafico = styled.div`
  grid-area: grafico;
  place-content: center;
  color: #000000;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  padding-bottom: 20px;
  .divFlex {
    display: flex;
    width: 100%;
    height: 80vh;
  }
  .Tittle{
    display: flex;
    justify-content: center;
    gap: 22%;
    margin-bottom: 24px;
  }
  .Tittle h3 {
    font-size: 700 13px 'Ubuntu';
    line-height: 15px;
    padding: 5px;
    color: #000000;
  }
  h1 {
    padding: 20px 20px;
    text-align: center;
    font: 700 2.5rem 'Ubuntu';
    color: #000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media(max-width: 1024px) {
       padding: 10px 10px;
    }
  }
`
export const BotaoIndicacao = styled(Link)`
  grid-area: botaoIndicacao;
  max-width: 300px;
  background: #434E65;
  border-radius: 20px;
  height: 110px;
  padding: 30px 20px;
  box-sizing: border-box;
  color: #fff;
  position: relative;

  @media(max-width: 1400px) {
    padding: 20px 20px;
  }

  p {
    font: 700 1.25rem/1.3 'Ubuntu';
    text-align: center;  

    @media(max-width: 1400px) {
      font-size: 1.1rem;
    }
  }

  span {
    font: 500 0.8125rem 'Ubuntu';
    position: absolute;
    right: 30px;
    top: 90px;
    text-decoration: underline;

    @media(max-width: 1400px) {
      top: 75px;
    }
  }
`

