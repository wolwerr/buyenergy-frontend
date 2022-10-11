import React from "react";
import { Chart } from "react-google-charts";
import { ChartStyle } from "./DadosGraficoStyle";

const Grafico = ({
  valorPago = 140,
  valorPagaria = 420,
  geracaoSua = 240,
  geracaoCemig = 130,
  geracaoTot = 470,
  consumoTot = geracaoSua + geracaoCemig,
  mes = "fevereiro",
  ano = 2022,
}) => {
  const options = {
    width: "20em",
    height: "30em",
    colors: [ '#85B824', '#4E6543'],
    legend: { position: "bottom" },
    // isStacked: 'true',
  };
  const options2 ={
    width: "20em",
    height: "30em",
    colors: [ '#F5B203', '#DA7034', '#0074C9' ],
    legend: { position: "bottom" },
  }
  const dataValor = [
    ["Data", "Com a usina você pagou", "Sem a usina você pagaria"],
    [`${mes}/${ano}`, valorPago, valorPagaria],
  ];

  const dataGeracao = [
    ["Data", "Sua geração total no mês de fevereiro é de", "Energia consumida da sua usina", "Energia consumida da CEMIG"],
    [`${mes}/${ano}`, geracaoTot, geracaoSua, geracaoCemig],
  ];

  return (
    <ChartStyle>
      <div>
        <h2>Economia financeira do mês</h2>
        <Chart chartType="ColumnChart" options={options} data={dataValor} />
      </div>
      <div>
        <h2>Geração x Consumo</h2>
        <Chart chartType="ColumnChart" options={options2} data={dataGeracao} />
      </div>
    </ChartStyle>
  );
};

export default Grafico;
