import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100%;
padding-left: 5%;
padding-right: 5%;
gap: 1px;
font-weight: 500;
hr{
  width: 80%;
  height: 0.5px;
  background-color: #000;
}
textarea{
  width: 99%;
  height: 16vh;
  color: #434E65;
  border: 1px solid #434E65;
  resize: none;
  font-size: 1.1vw;
}
button{
  background-color: #434E65;
  color: #fff;
  border: 0;
  width: 20vh;
  height: 5vh;
  border-radius: 6px;
  margin-top: 5px;
  font-family: 'Ubuntu';
  font-weight: 700;
  font-size: 2vh;
}
button:hover{
  background-color: #777e8e;
  cursor: pointer;
}
`
export const Titulo = styled.div`
font-size: 4.5vh;
font-style: normal;
font-weight: 700;
font-family: 'Ubuntu';
`
export const Segundop = styled.div`
display: flex;
width: 100%;
font-size: 1.1vw;
font-weight: 500;
text-align: center;
justify-content: center;
`
export const Terceirop = styled.div`
font-size: 1.1vw;
`
export const Button = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
margin-bottom: 2vh;
`