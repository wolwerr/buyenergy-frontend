import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    reais: 2000,
    name: 'maio/2022',
    "Com a usina você pagou": 900,
    "Sem a usina você pagaria": 1200,
  }
];

export default class GraficoEconomiaFinanceira extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="reais"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Com a usina você pagou" fill="#85B824" barSize={50}/>
          <Bar dataKey="Sem a usina você pagaria" fill="#4E6543" barSize={50}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
