import React from "react";
import { StyledTable } from "./consumoGeracaoTabelaStyle";

const Row = ({ line }) => {
  const keys = Object.keys(line);

  const value = Object.values(line);
  console.log(value);
  let rowColor = "";
  if (value[0] === "Geração da Usina") {
    rowColor = "row1";
  } else if (value[0] === "Energia Consumida da Usina") {
    rowColor = "row2";
  } else if (value[0] === "Energia Consumida da CEMIG") {
    rowColor = "row3";
  } else if (value[0] === "Energia Consumida TOTAL") {
    rowColor = "row4";
  } else if (value[0] === "Créditos Transferidos") {
    rowColor = "row5";
  }

  return (
    <tr key={line.MES} className={rowColor}>
      {keys.map((key) => (
        <td key={key}>{line[key]}</td>
      ))}
    </tr>
  );
};

const Table = ({ data }) => {
  const keys = Object.keys(data[0]);
  return (
    <StyledTable>
      <thead>
        {keys.map((key) => (
          <th className="header" key={key}>
            {key}
          </th>
        ))}
      </thead>
      <tbody>
        {data.map((line) => {
          return <Row line={line} />;
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
