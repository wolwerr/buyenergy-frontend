import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppCnt } from "./assets/styles/AppStyle";
import HomePage from "./pages/home/HomePage"
import IndicacaoPage from "./pages/indicacao/IndicacaoPage"
import Feedback from "./pages/feedback/Feedback"
import LoginPage from "./pages/login/LoginPage"
import Economia from "./pages/economia/EconomiaPage"
import ErrorPage from "./pages/error/ErrorPage";
import ConsumoXGeracaoPage from "./pages/consumoGeracao/ConsumoXGeracaoPage";

function App() {
  return (
    <AppCnt>
      <Router>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/consumo-e-geracao" element={<ConsumoXGeracaoPage />} />
          <Route path="/economia" element={<Economia />} />
          <Route path="/indicacao" element={<IndicacaoPage />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Router>
    </AppCnt>
  );
}

export default App;
