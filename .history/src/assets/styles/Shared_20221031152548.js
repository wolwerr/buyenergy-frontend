import styled from "styled-components";

export const HeaderMainCnt = styled.div`
    width: 100%;

export const FlexCnt = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
`