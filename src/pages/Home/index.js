
import React, { useState, useRef,} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
 } from "../styles";

import Codeclub from "../../assets/codeclub1.png";


function App() {
  const [requests, steRequests] = useState([])
  const inputOrders = useRef()
  const inputClienteName = useRef()
  const history=useHistory()



  async function addNewOrder() {

    const { data: newOders } = await axios.post("http://localhost:3001/order", {
      orders: inputOrders.current.value,
      clienteName: inputClienteName.current.value
    })



    steRequests([...requests, newOders])
    
  history.push("/pedido")
  }

 
 

  return (
    <Container>
      <Image src={Codeclub} alt="logo" />
      <ContainerItems>
        <H1>Faço seu Pedido</H1>
        <InputLabel >Pedido</InputLabel>
        <Input ref={inputOrders} placeholder="pedido" />

        <InputLabel >Nome do Cliente</InputLabel>
        <Input ref={inputClienteName} placeholder="nome do cliente" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItems>
    </Container>
  );
}

export default App;
