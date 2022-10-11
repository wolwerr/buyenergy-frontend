import React, { useEffect, useState } from 'react'
import { HeaderCnt, HeaderIconsLeft, ProfileImg, ProfileOptIcon, ProfileOptions } from './HeaderStyle'
import ProfileIcon from '../../assets/images/icons/test-account.png'
import ProfileOptionsIcon from '../../assets/images/icons/triangulo-para-baixo.png'

export default function Header({
    userName = 'usuário',
    userProfilePhoto = ProfileIcon
}) {
  const [profileOptions, setprofileOptions] = useState(false)

  function toggleProfileOptions () {
    setprofileOptions(!profileOptions)
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const detectSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowWidth])

  return (
    <HeaderCnt windowWidth={`${windowWidth}`}>
        <p>Olá, {userName}!</p>
        <HeaderIconsLeft>
          <ProfileImg src={userProfilePhoto} alt="Foto do perfil do usuário" />
          <ProfileOptIcon row src={ProfileOptionsIcon} alt="" onClick={toggleProfileOptions} />
        </HeaderIconsLeft>
        {profileOptions &&
          <ProfileOptions>
            <p>Sair</p>
          </ProfileOptions>
        }
    </HeaderCnt>
  )
}
