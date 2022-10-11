import React from 'react'

export default function DadosPerformance({ title="Titulo",value="Valor",description="Previsto",descriptionValue="Valor"}) {
  return (
    <div>
        <h2>{title}</h2>
        <h3> {value}</h3>
        <p> <strong></strong>{description}{descriptionValue}</p>
    </div>
  )
}