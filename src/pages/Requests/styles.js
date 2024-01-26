import styled from "styled-components";
import Background from "../../assets/bg.png"


export const Container = styled.div`
background: url('${Background}');
background: cover;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Image = styled.img`
  width: 242px;
  height:304px;
  `;

export const ContainerItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
min-height: calc(100vh - 170px);
`;
export const H1 = styled.h1`

  font-weight: 700;
  font-size: 38px;
   color:rgba(255, 255, 255, 1);
  width: 213px;
  height: 33px;
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 80px;
  `;


export const Button = styled.button`
  width:342px;
  height: 68px;
  background: rgba(255, 255, 255, 0.14);
  border: none;
  color:#ffffff;
  font-weight: 700;
  font-size: 20px;
  align-items: center;
  cursor: pointer;
  margin-top:20px;
  
 
 &:hover{
  opacity:0.2;
 } 
 
 &:active{
  opacity: 0.7;
 }
`;



export const Request = styled.li`
display: flex;
justify-content: space-around;
flex-direction: column;

width: 342px;
height: 101px;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
border: none;
outline: none;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-top: 10px;

p{
  
   padding-top: 15px;
   padding-left: 25px;
   font-weight: 300;
   font-size: 18px;
   color:rgba(255, 255, 255, 1);
}
button{
  background: none;
  border: none;
  cursor: pointer;
  float: left;
  margin-left: 290px;
 }

`;

export const Paragrafo = styled.h3`

padding-left: 30px;
padding-bottom: 20px;
font-weight: 700;
font-size: 18px;
color:rgba(255, 255, 255, 1);
`

