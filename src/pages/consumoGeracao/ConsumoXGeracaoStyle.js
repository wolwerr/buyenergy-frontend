import styled from "styled-components";

const Styles = styled.div`
  * {
    font-family: ubuntu;
    font-weight: 700;
  }

  h1 {
    text-align: center;
  }

  .chartContainer {
    //border: 1px solid #848484;
    border-radius: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 2rem auto;
    margin-top: 7rem;
    padding: 1rem;
    max-width: 62%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tableContainer {
    margin: 2rem auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Styles;
