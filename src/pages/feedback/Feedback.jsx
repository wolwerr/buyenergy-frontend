import { useState } from "react";
import Header from "../../layouts/header/Header";
import NavMenu from "../../layouts/navMenu/NavMenu";
import Main from "../../layouts/main/Main";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Snackbar from "@mui/material/Snackbar";
import {
  MainContainer,
  DivTituloEsstrelas,
  Botao,
  Titulo,
} from "./FeedbackStyle";

export default function Feedback() {
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);
  const [value3, setValue3] = useState(3);
  // Esses states são usados abaixo para salvar o numero de estrelas da classificação de cada item

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <NavMenu page="feedback" />
      <Main>
        <MainContainer>
          <Titulo>
            <h1>Nós adoraríamos ter o seu feedback</h1>
            <hr />
          </Titulo>

          <DivTituloEsstrelas>
            <p>Como você avalia o atendimento da Buy Energy até aqui? *</p>
            <Box
              className="box"
              component="fieldset"
              mb={3}
              borderColor="transparent"
            >
              <Rating
                className="rating"
                name="simple-controlled1"
                value={value1}
                onChange={(event, newValue) => {
                  setValue1(newValue);
                }}
              />
            </Box>
            <input
              type="text"
              placeholder="Que tal nos dizer o porquê nos deu essa nota?"
            />
          </DivTituloEsstrelas>
          <DivTituloEsstrelas>
            <p>O que você está achando da plataforma? *</p>
            <Box
              className="box"
              component="fieldset"
              mb={3}
              borderColor="transparent"
            >
              <Rating
                className="rating"
                name="simple-controlled2"
                value={value2}
                onChange={(event, newValue2) => {
                  setValue2(newValue2);
                }}
              />
            </Box>
            <input
              type="text"
              placeholder="Que tal nos dizer o porquê nos deu essa nota?"
            />
          </DivTituloEsstrelas>
          <DivTituloEsstrelas>
            <p>
              Como você avalia a performance da sua usina neste último mês? *
            </p>
            <Box
              className="box"
              component="fieldset"
              mb={3}
              borderColor="transparent"
            >
              <Rating
                className="rating"
                name="simple-controlled3"
                value={value3}
                onChange={(event, newValue3) => {
                  setValue3(newValue3);
                }}
              />
            </Box>
            <input
              type="text"
              placeholder="Que tal nos dizer o porquê nos deu essa nota?"
            />
          </DivTituloEsstrelas>
          <Botao>
            <button
              onClick={handleClick({ vertical: "bottom", horizontal: "right" })}
            >
              ENVIAR
            </button>
          </Botao>
          <Snackbar
            backgroundColor="white"
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message={
              <span>
                <div>Agradecemos o seu feedback!</div>
              </span>
            }
            key={vertical + horizontal}
          ></Snackbar>
        </MainContainer>
      </Main>
      <Header />
    </>
  );
}
