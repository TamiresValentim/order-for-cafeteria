
import React, { useState,  useEffect } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios"

import {
  Container,
  Image,
  ContainerItems,
  H1,
  Button,
  Request,
  Paragrafo


} from "./styles";

import BurgerBag from "../../assets/burger.png";
import Rin from "../../assets/rin.png"



function Requests() {
  const [requests, steRequests] = useState([])
  const history = useHistory()

  



  useEffect(() => {
      async function fetchOrders() {
      const { data: newOders } = await axios.get("http://localhost:3001/order")
      steRequests(newOders);
    }
    fetchOrders()
  }, [])

  async function deleteOrders(requestsId) {
    
    await axios.delete(`http://localhost:3001/order/${requestsId}`)
    
    const newOrders = requests.filter(requests => requests.id !== requestsId);

    steRequests(newOrders)
  }
 function goBackPage (){
   history.goBack()
 }

  return (
    <Container>
      <Image src={BurgerBag} alt="logo" />
      <ContainerItems>
        
        <H1>Pedido</H1>
        
      <ul>
          {requests.map((requests =>

            <Request key={requests.id}>
              <p>  {requests.orders}</p>
              <button onClick={() => deleteOrders(requests.id)}><img alt="rin" src={Rin} /></button>
              <Paragrafo>{requests.clienteName}</Paragrafo>

            </Request>))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItems>
    </Container>
  );
}

export default Requests;
