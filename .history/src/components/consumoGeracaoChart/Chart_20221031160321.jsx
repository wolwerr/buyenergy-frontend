import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import { chartData } from "./chartData";

// const teste = chartData.filter((obj) => {
//   return obj.name === "Nov/21";
// });

export default class GraficoConsumoGeracao extends PureComponent {
  render() {
    return (
      <BarChart
        width={800}
        height={300}
        data={chartData}
        stackOffset="sign"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis dataKey="kwh" />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Geração de Energia" fill="#F5B203" stackId="stack2" />
        <Bar dataKey="Consumo CEMIG" fill="#DA7034" stackId="stack" />
        <Bar dataKey="Consumo Usina" fill="#0074C9" stackId="stack" />
      </BarChart>
    );
  }
}
