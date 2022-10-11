import { ErrorCnt, ErrorTitle, ErrorDescription, ErrorImg } from './ErrorPageStyle'
import constructionImg from '../../assets/images/Pagina-em-construcao.png'
import NavMenu from '../../layouts/navMenu/NavMenu'
import { HeaderMainCnt } from '../../assets/styles/Shared'
import Header from '../../layouts/header/Header'
import Main from '../../layouts/main/Main'

export default function ErrorPage() {
  return (
    <>
        <NavMenu />
        <HeaderMainCnt>
            <Header
            />
            <Main>
              <ErrorCnt>
                <ErrorTitle>Página não encontrada ou em construção</ErrorTitle>
                <ErrorDescription>Estamos trabalhando muito para lhe dar a melhor experiência!</ErrorDescription>
                <ErrorImg src={constructionImg} alt="" />
              </ErrorCnt>
            </Main>
        </HeaderMainCnt>
    </>
  )
}
