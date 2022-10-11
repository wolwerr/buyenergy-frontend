import React from 'react'
import { HeaderMainCnt } from '../../assets/styles/Shared'
import Header from '../../layouts/header/Header'
import Main from '../../layouts/main/Main'
import NavMenu from '../../layouts/navMenu/NavMenu'
import { MainContainer, Title, TimeValueTitle, TimeValue, Bottom, Middle } from './EconomiaStyle'

export default function EconomiaPage() {
  return (
    <>
      <NavMenu page="economia" />
      <HeaderMainCnt>
        <Main>
          <MainContainer>
            <Title>
              <p>Saiba mais sobre a sua economia</p>
            </Title>
            <Middle>
              <p>Em 01 ano e 02 meses você economizou</p>
              <button>R$ 8700,00</button>
            </Middle>
            <TimeValueTitle>
              <p>Economia em reais com sua usina</p>
            </TimeValueTitle>
            <TimeValue>
              <p className='blue'>MÊS</p>
              <p className='blue'>Janeiro</p>
              <p className='blue'>Fevereiro</p>
              <p className='blue'>Março</p>
              <p className='blue'>Abril</p>
              <p className='blue'>Maio</p>
              <p className='blue'>Junho</p>
              <p className='blue'>R$</p>
              <p className='white'>550</p>
              <p className='white'>800</p>
              <p className='white'>900</p>
              <p className='white'>770</p>
              <p className='white'>870</p>
              <p className='white'>400</p>
            </TimeValue>
            <TimeValue>
            <p className='blue'>MÊS</p>
              <p className='blue'>Janeiro</p>
              <p className='blue'>Fevereiro</p>
              <p className='blue'>Março</p>
              <p className='blue'>Abril</p>
              <p className='blue'>Maio</p>
              <p className='blue'>Junho</p>
              <p className='blue'>R$</p>
              <p className='white'>650</p>
              <p className='white'>800</p>
              <p className='white'>780</p>
              <p className='white'>600</p>
              <p className='white'>690</p>
              <p className='white'>890</p>
            </TimeValue>
            <Bottom>
              <p>Para recuperar o valor investido faltam: 02 anos e 01 mês</p>
              <p>Valor investido: R$ 24.300,00</p>
            </Bottom>
          </MainContainer>
        </Main>
        <Header />
      </HeaderMainCnt>
    </>
  )
}
