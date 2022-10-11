import styled from "styled-components";
import background from "../../assets/images/background.png"

export const MainLogin = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const CompanyLogo = styled.img`
    max-width: 300px;
    height: auto;
    margin-top: 20px;
`

export const CompanyMotto = styled.p`
    font-family: 'Ubuntu';
    font-size: 1.2em;
    color: #434E65;
    text-transform: uppercase;
    margin: 20px 0 100px 0;
`

export const LoginLabel = styled.label`
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2em;
    line-height: 28px;
    color: #434E65;
`

export const LoginInput = styled.input`
   background: #FFFCFC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 510px;
    height: 50px;
    border: none;
    margin-bottom: 15px;
    padding-left: 20px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-size: 1.2em;
    color: #434E65;

    &:focus {
        outline: none;
    }
`

export const LoginSubmitBnt = styled.input`
    background: #434E65;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
    border: none;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2em;
    padding: 14px 0;
    margin-top: 10px;
`