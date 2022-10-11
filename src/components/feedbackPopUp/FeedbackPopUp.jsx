import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import {
  Button,
  Container,
  Segundop,
  Terceirop,
  Titulo,
} from "./FeedbackPopUpStyle";

export default function FeedbackPopUp() {
  //state para status do modal
  const [value, setValue] = useState(2);

  return (
    <>
      <Container>
        <Titulo>
          <p>Nós adorariamos ter o seu feedback</p>
        </Titulo>
        <hr />
        <Segundop>
          <p>Como está sendo sua experiência com o app até agora?</p>
        </Segundop>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            style={{ fontSize: "8.2vh" }}
          />
        </Box>
        <Terceirop>
          <p>
            Ficariamos felizes se você nos contasse um pouco sobre a sua
            expêriencia no app e performance da sua usina nesse último mês
          </p>
        </Terceirop>
        <textarea cols="30" rows="5"></textarea>
        <Button>
          <button>ENVIAR</button>
        </Button>
      </Container>
    </>
  );
}
