import Header from "../../layouts/header/Header";
import Main from "../../layouts/main/Main";
import {
  BotaoAmareloContainer,
  BotaoIndicacao,
  DivBarraLateral,
  Grafico,
  MainStyle,
} from "./HomePageStyle";
import ValorTotal from "../../components/home/ValorTotal";
import DadosPerformance from "../../components/home/DadosPerformance";
import NavMenu from "../../layouts/navMenu/NavMenu";
import GraficoEconomiaFinanceira from "../../components/home/GraficoEconomiaFinanceira";
import GraficoConsumoGeracao from "../../components/home/GraficoConsumoGeracao";

export default function HomePage({ userName = "usuário", value = "1 }) {
  return (
    <>
      <NavMenu page="home" />
      <Main>
        <MainStyle>
          <BotaoAmareloContainer>
            <ValorTotal
              title={`Valor economizado até o momento:`}
              description="R$"
              descriptionValue={value = 100}
            />
            <ValorTotal
              title="Geração de energia total da usina:"
              description={value = 200}
              descriptionValue=" kWh"
            />
          </BotaoAmareloContainer>
          <Grafico>
            <h1>Análise do último mês</h1>
            <div className="Tittle"> 
              <h3>Economia Financeira do Mês</h3>
              <h3>Geração X Consumo</h3>
            </div>
            <div className="divFlex">
              <GraficoEconomiaFinanceira />
              <GraficoConsumoGeracao />
            </div>
          </Grafico>
          <DivBarraLateral>
            <h1>Performance da Usina</h1>
            <DadosPerformance
              title="Total real de energia gerada:"
              value={value = 300}
              description="Total previsto: "
              descriptionValue={value = 400}
            />
            <DadosPerformance
              title="Média real de geração mensal:"
              value={value}
              description="Média prevista: "
              descriptionValue={value = 500}
            />
            <DadosPerformance
              title="Saldo de crédito acumulado na CEMIG:"
              value={value}
              description=""
              descriptionValue=""
            />
          </DivBarraLateral>
          <BotaoIndicacao to="/indicacao">
            <p>Indique amigos e ganhe comissões nas vendas</p>
            <span>Saiba mais &gt;</span>
          </BotaoIndicacao>
        </MainStyle>
      </Main>
      <Header userName={userName} />
    </>
  );
}
