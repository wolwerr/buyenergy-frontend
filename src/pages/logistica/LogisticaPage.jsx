import { HeaderMainCnt } from "../../assets/styles/Shared";
import Header from "../../layouts/header/Header";
import Main from "../../layouts/main/Main";
import NavMenu from "../../layouts/navMenu/NavMenu";

export default function LogisticaPage() {
  return (
    <>
      <NavMenu />
      <HeaderMainCnt>
          <Main>
          </Main>
          <Header />
      </HeaderMainCnt>
    </>
  )
}
