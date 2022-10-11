import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
height: 100vh;
padding: 4%;
padding-top: 3.5%;
gap: 3.5vh;
`

export const Title = styled.div`
width: 100%;
p{
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 4.9vh;
    color: #434E65;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`

export const Middle = styled.div`
display: flex;
height: 14vh;
margin-top: 2.8vh;
justify-content: space-between;
align-items: center;
flex-direction: column;
p{
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 3.9vh;
    color: #434E65;
}
button{
    background: rgba(133, 184, 36, 0.6);
    border-radius: 10px;
    border: 0;
    width: 30.5vh;
    height: 8.5vh;
    font-family: 'Ubuntu';
    font-weight: 500;
    font-size: 4.85vh;
    text-align: center;
    color: #FFFFFF;
}
`

export const TimeValueTitle = styled.div`
width: 100%;
margin-top: 2.1vh;
p{
    font-family: 'Ubuntu';
    font-weight: 700;
    font-size: 3.55vh;
    color: #434E65;
}
`

export const TimeValue = styled.div`
display: grid;
width: 100%;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
column-gap: 0.47%;
row-gap: 10%;
.blue{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    background-color: #434E65;
    color: #fff;
    font-family: 'Ubuntu';
    font-weight: 500;
    font-size: 2.85vh;
    text-align: center;
}
.white{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5vh;
    background-color: #f7f7f7;
    color: #434E65;
    border: 3px solid #434E65;
    font-family: 'Ubuntu';
    font-weight: 500;
    font-size: 2.85vh;
    text-align: center;
}
`

export const Bottom = styled.div`
display: flex;
width: 100%;
margin-top: 4.8vh;
flex-direction: column;
align-items: flex-start;
p{
    font-family: 'Ubuntu';
    font-weight: 400;
    font-size: 2.95vh;
    color: #434E65;
}
`


// export const MainContainer = styled.div`
// `