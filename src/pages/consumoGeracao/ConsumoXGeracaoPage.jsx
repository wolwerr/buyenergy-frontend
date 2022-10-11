import React from "react";
import { HeaderMainCnt } from "../../assets/styles/Shared";
import Header from "../../layouts/header/Header";
import Main from "../../layouts/main/Main";
import NavMenu from "../../layouts/navMenu/NavMenu";
import Styles from "./ConsumoXGeracaoStyle";
import Table from "../../components/consumoGeracaoTabela/consumoGeracaoTabela";
import { data } from "../../components/consumoGeracaoTabela/data";
import GraficoConsumoGeracao from "../../components/consumoGeracaoChart/Chart";

export default function ConsumoXGeracaoPage() {
  return (
    <>
      <NavMenu page="consumoGeracao" />
      <HeaderMainCnt>
        <Main>
          <Styles>
            <div className="chartContainer">
              <h1>Geração x Consumo</h1>
              <GraficoConsumoGeracao />
            </div>
            <div className="tableContainer">
              <Table data={data} />
            </div>
          </Styles>
        </Main>
        <Header />
      </HeaderMainCnt>
    </>
  );
}
