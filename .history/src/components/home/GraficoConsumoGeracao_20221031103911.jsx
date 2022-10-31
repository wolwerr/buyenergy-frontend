import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { 
    reais: 2000,
    name: 'maio/2022',
    "Sua geração total do mês": 900,
    "Energia consumida da sua Usina": 1100,
    "Energia consumida da CEMIG": 800,
  },
];

export default class GraficoConsumoGeracao extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/mixed-bar-chart-q4hgc';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="reais" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sua geração total do mês" fill="#F5B203" barSize={50}/>
          <Bar dataKey="Energia consumida da sua Usina" stackId="a" fill="#DA7034" barSize={50}/>
          <Bar dataKey="Energia consumida da CEMIG" stackId="a" fill="#0074C9" barSize={50}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
