import React from 'react'
import logo from '../../assets/images/logo_principal_curta.png'
import { CompanyLogo, CompanyMotto, LoginForm, LoginInput, LoginLabel, LoginSubmitBnt, MainLogin } from './LoginStyle'

export default function LoginPage() {
  return (
    <MainLogin>
      <CompanyLogo src={logo} alt="" />
      <CompanyMotto>Sustentabilidade e economia em forma de energia</CompanyMotto>
      <LoginForm action="" method="post">
        <LoginLabel htmlFor="login">Login</LoginLabel>
        <LoginInput type="text" name="login" id="login" />
        <LoginLabel htmlFor="password">Senha</LoginLabel>
        <LoginInput type="password" name="password" id="password" />
        <LoginSubmitBnt type="submit" value="Entrar" />
      </LoginForm>
    </MainLogin>
  )
}
