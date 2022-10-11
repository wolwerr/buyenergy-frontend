import React from 'react'
import { BotaoAmarelo } from './ValorTotalStyle'

export default function ValorTotal({ title="Valor Gerado",description="R$",descriptionValue="valor descrito"}) {
  return (
    <BotaoAmarelo>
        <h3>{title}</h3>
        <p>{description}{descriptionValue}</p>
    </BotaoAmarelo>
  )
}