import React from 'react'
import FeedbackPopUp from '../../components/feedbackPopUp/FeedbackPopUp'
import Popup from '../../components/popUp/PopUp'
import Header from '../../layouts/header/Header'
import Main from '../../layouts/main/Main'
import NavMenu from '../../layouts/navMenu/NavMenu'
import './HomePageStyle.css'

export default function HomePage() {
  return (
    <>
      <NavMenu page="home"/>
      <Main>
        <Popup 
        >
          <FeedbackPopUp/>
        </Popup>
      </Main>
      <Header />
    </>
  )
}
