import styled from "styled-components";

export const BotaoAmarelo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f5b203;
  border-radius: 20px;
  width: 300px;
  height: 160px;
  font-size: 20px;
  color: white;
  margin: auto;

  @media(max-width: 1400px) {
    font-size: 16px;
    height: 140px;
  }
  
  h3 {
    font-family: 'Ubuntu';
    font-style: normal;
    text-align: center;
    padding: 0 30px;
  }

  p {
    font-size: 40px;
    font-family: ubuntu;
    font-style: bold;
    padding-top: 5%;

    @media(max-width: 1400px) {
      font-size: 30px;
    }
  }
`;