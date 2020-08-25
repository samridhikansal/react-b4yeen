import React, {useState} from "react";
import "./style.css";
import styled from 'styled-components'
import {device}from './styled'

const Wrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
height: 20vh;
background-color: green;

@media (min-width:768px){
  height:100vh;
  width: 20vw;
}

 `
 const NavButton = styled.button`
  background-color: black;
  width: 50px;
  height: 30px;
  color:white;
  margin: 10px;
  
`
const Navbar = styled.ul`
display: flex;
flex-direction: column;
margin:0;
padding:0;
`

export default function App() {
 const [toggle, setToggle]= useState( { toggleState: false})
 
 const handleToggle = ()=>{ setToggle ({ toggleState: ! toggle.toggleState})}
  return (
    <Wrapper >
    <NavButton onClick = { handleToggle} >Toggle</NavButton>
      {toggle.toggleState&&<ul style={{ listStyleType: "none" }} >
          <li> home </li>
          <li>contact</li>
          <li>about</li>
      </ul>}
      
    </Wrapper>
  );
}
