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
  width: 342px;
  height:354px;
  
 
`;

export const ContainerItems = styled.div`

display: flex;
flex-direction: column;
align-items: center;
`;
export const H1 = styled.h1`

  font-weight: 700;
  font-size: 28px;
   color:rgba(255, 255, 255, 1);
  width: 213px;
  height: 33px;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 80px;
  

  

`;

export const InputLabel = styled.label`
  display:flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 18px;
  align-items: center;
  color:rgba(255, 255, 255, 1);
 padding-right: 160px;

  

`;

export const Input = styled.input`
 width: 342px;
 height: 58px;
 margin-bottom: 50px;
 margin-left: 36px;
 gap:18px;
 border: none;
 border-radius: 20px;
 background: rgba(255, 255, 255, 0.25);
 box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
 
 font-weight: 700;
 font-size: 18px;
 align-items: center;
 color:rgba(255, 255, 255, 1);
  padding-left: 10px;
  margin-top:10px;


`;

export const Button = styled.button`
  width:342px;
  height: 68px;
  background: rgba(217, 56, 86, 1);
  border: none;
  color:#ffffff;
  font-weight: 700;
  font-size: 20px;
  align-items: center;
  cursor: pointer;
  margin-top:20px;
  margin-left: 30px;
  
 
 &:hover{
  opacity:0.2;
 } 
 
 &:active{
  opacity: 0.7;
 }
`;

