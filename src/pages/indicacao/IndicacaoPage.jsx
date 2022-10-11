import { HeaderMainCnt } from "../../assets/styles/Shared";
import Header from "../../layouts/header/Header";
import Main from "../../layouts/main/Main";
import NavMenu from "../../layouts/navMenu/NavMenu";

//Imagens do Formulário
import IconProfile from "../../assets/images/icons/user-male-circle.png"
import IconWhats from "../../assets/images/icons/whatsapp.png"
import IconEmail from "../../assets/images/icons/new-post.png"
//Alterações a Serem Revisadas (Samael)
import {Tittle, SubTittle, ContainerItems, Phrase, Form} from './IndicacaoStyle'

export default function IndicacaoPage() {
  return (
    <>
      <NavMenu page = "indicacao" />
      <HeaderMainCnt>
        <Main> 
          <ContainerItems>
            <Tittle >Você ganha junto com a Buy</Tittle>
            <SubTittle >Indicando a Buy Energy você ganha comissão por cada projeto fechado!</SubTittle> 
            <Phrase >Você só precisa cadastrar o contato da pessoa indicada e nós fazemos o resto.</Phrase>
            <Form>
              <div className="formulario">
                <h2 className="text">Nova indicação</h2>
                <div className="input-container">
                  <label htmlFor="inputName"><img src={IconProfile}alt="" /></label>
                  <input required id="inputName" type="text" />
                </div>
                <div className="input-container">
                  <label htmlFor="inputPhone"><img src={IconWhats}alt="" /></label>
                  <input required id="inputPhone" type="tel"/>
                </div>
                <div className="input-container">
                  <label htmlFor="inputEmail"><img src={IconEmail}alt="" /></label>
                  <input required id="inputEmail" type="email" />
                </div> 
                <div className= "coment">
                  <h2 className= "text">Deixe aqui a sua mensagem sobre a pessoa indicada:</h2>
                  <textarea name="Comentario" id="Coments" cols={30} rows= {10}></textarea>
                </div>
                <div className="button-container">
                  <button type="submit">Enviar</button>
                </div>
              </div>
          </Form>
          </ContainerItems>
        </Main>
        <Header />
      </HeaderMainCnt>
    </>
  )
}
