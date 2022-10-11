import React from 'react'
import logo from '../../assets/images/logo_negativo.png'
import iconHome from '../../assets/images/icons/home-page.png'
import iconIndicacao from '../../assets/images/icons/4 - Indicação.png'
import iconGeracaoConsumo from '../../assets/images/icons/2 - Geração x Consumo.png'
import iconEconomia from '../../assets/images/icons/3 - Economia.png'
import iconFeedback from '../../assets/images/icons/star.png'
import { NavCnt, LogoImgLink, UlNavMenu, LiNavMenu, NavIconImg, LiSpan, LinkNav, } from './NavMenuStyle'

export default function NavMenu({ page="" }) {

  return (
    <NavCnt>
      <div>
        <LogoImgLink  to="/">
            <img src={logo} alt="" />
        </LogoImgLink>
        <UlNavMenu>
            <LiNavMenu>
              <LinkNav to="/" active={page === "home" ? "active"  : ""}>
                <NavIconImg src={iconHome} alt=''/>
                <LiSpan active={page === "home" ? "active"  : ""}>Home</LiSpan>
              </LinkNav>
            </LiNavMenu>
            <LiNavMenu>
              <LinkNav to="/consumo-e-geracao" active={page === "consumoGeracao" ? "active"  : ""}>
                <NavIconImg src={iconGeracaoConsumo} alt=''/>
                <LiSpan active={page === "indicacao" ? "active"  : ""}>Consumo X Geração</LiSpan>
              </LinkNav>
            </LiNavMenu>
            <LiNavMenu>
              <LinkNav to="/economia" active={page === "economia" ? "active"  : ""}>
                <NavIconImg src={iconEconomia} alt=''/>
                <LiSpan active={page === "indicacao" ? "active"  : ""}>Economia</LiSpan>
              </LinkNav>
            </LiNavMenu>
            <LiNavMenu>
              <LinkNav to="/indicacao" active={page === "indicacao" ? "active"  : ""}>
                <NavIconImg src={iconIndicacao} alt=''/>
                <LiSpan active={page === "indicacao" ? "active"  : ""}>Indicação</LiSpan>
              </LinkNav>
            </LiNavMenu>
            <LiNavMenu>
              <LinkNav to="/feedback" active={page === "feedback" ? "active"  : ""}>
                <NavIconImg src={iconFeedback} alt=''/>
                <LiSpan active={page === "feedback" ? "active"  : ""}>Avaliação e feedback</LiSpan>
              </LinkNav>
            </LiNavMenu>
        </UlNavMenu>
      </div>
    </NavCnt>
  )
}
