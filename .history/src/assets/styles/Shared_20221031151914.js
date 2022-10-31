import styled from "styled-components";

export const FlexCnt = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
`