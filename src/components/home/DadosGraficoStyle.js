import styled from "styled-components";

export const ChartStyle = styled.div`
  display: flex;
  gap: 40px;
  width: 90%;
  margin: 0 2.1875em 0 2.1875em;

  @media(max-width: 1400px){
    padding: 0px 0px 30px 0px;
  }

  h2 {
    text-align: center;
    font: 700 0.8125rem 'Ubuntu';
    color: #000;
    text-transform: uppercase;
    margin-bottom: 25px;

    @media(max-width: 1400px) {
      margin-bottom: 15px;
    }
  }
`