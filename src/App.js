import React from "react";


import {
  Contairne,
  Image,
  ContairneItens,
  H1,
  InputLabel,
  Input,
  Button
} from "./styles";

import Codeclub from "./assets/codeclub.svg"


function App() {

  return <Contairne>

    <Image  src={Codeclub} alt="logo"/>
    
    <ContairneItens>

      <H1>Faço o Pedido</H1>


      <InputLabel>Pedido</InputLabel>
      <Input placeHolder="pedido" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input placeHolder="nome do cliente" />

      <Button>Novo PEDIDO</Button>
    </ContairneItens>







  </Contairne>

}


export default App;