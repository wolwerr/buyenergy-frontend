import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
color: #434E65;
padding: 6vh 5.1vh;
width: 100%;
height: 93%;
gap: 4.1vh;
@media screen and (min-width: 2000px) {
  padding: 6vh 3vh 6vh 10vh;
}
button{
  width: 30%;
  height: 7.6vh;
  background: #434E65;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 3vh;
  color: #FFFFFF;
  border:0;
  font-weight: 700;
}
button:hover{
  background: #777e8e;
  cursor: pointer;
}
`

export const DivTituloEsstrelas = styled.div`
display: grid;
grid-template-columns: 2.5fr 1fr;
grid-template-rows: 1fr 1fr;
align-items: center;
font-size: 2.5vh;
width: 93%;
height: 10vh;
margin: 0;
margin-bottom: 4.1vh;
@media screen and (min-width: 2000px) {
  width: 100%;
}
p{
  font-weight: 700;
  width: 100%;
  height: 50%;
  margin: 0;
}
input{
  width: 100%;
  height: 6.9vh;
  border: 1px solid #434E65;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 3vh;
  margin-bottom: 1rem;
}
.box{
  margin: 0;
  padding: 0;
}
.rating{
  font-size: 7vh;
}
`

export const Botao = styled.div`
  display: flex;
  justify-content: center;
  button{
    width: 26.5vh;
    height: 6.5vh;
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 2.9vh;
    margin-top: 1vh;
  }
`
export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  text-align: center;
  h1{
    font-size: 4.9vh;
  }
  hr{
    width: 45%;
    margin-top: 5vh;
    margin-bottom: 1.5vh;
    background-color: #000;
    border: 0;
    height: 1px;
}
`
