import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  //PALPITE
  const [palpite, setPalpite] = useState(150);

  //NUMERO DE PALPITES
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarjogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setPalpite(150);
    setNumPalpites(1);
  };

  const finalizarjogo = () => {
    setEstado("FIM");
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarjogo}>Começar</button>;
  }

  if (estado === "FIM") {
    return (
      <div>
        <h1>ADVINHEI SEU NUMERO COM {numPalpites} TENTATIVAS ;)</h1>
        <button onClick={iniciarjogo}>Iniciar Novamente</button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <button onClick={menor}>Menor</button>
      <button onClick={finalizarjogo}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
