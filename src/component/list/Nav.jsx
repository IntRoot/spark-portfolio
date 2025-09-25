
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Shape from './Shapes'

const Wrapper = styled.div`
 
 
  display: flex;
 
  margin: 10px 0 20px 0;
`;

const Title = styled.h1`
  font-size: 24px;
 padding: 14px 0 0px 60px;
 //  padding: 14px 0 0px 500px;
 position: relative;  
  z-index: 10;  
 display: flex;
 float: left;
 margin: 0;  

`;
const NavBar = styled.nav`
width: 100%;
  
    ul {
        display: flex;
        justify-content: flex-end;
        list-style: none;
         margin: 0 60px 0 0;   
        padding: 20px;
      }
  
    a {
   
        
        text-decoration: none;
        color: black;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 8px;

        font-size: 20px;
        &:hover {
            border-bottom: 2px solid black;
          }
    
      }
 
         @media (max-width: 965px) {
          
      ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: white;
        position: absolute;
        left: 0;
        opacity: 0;     
      
        padding-top: 80px;
        top: -50px;
        transition: top 0.5s ease, opacity 0.4s ease; 
      }

      ul.active {
      top: 0px; 
        opacity: 1;     
      }

    li {
      text-align: start;
       padding-bottom: 30px;
    }

  
    
    `;
 
    const Button  = styled.button`
      display: none;
      @media (max-width: 965px) {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: none;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;  
      top: 10px;   
      right: 20px;   
  }
  
    `;

    function Nav() {
 
      const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
        return (
        <Wrapper >
            
         <NavBar>
         <Title><Shape shape="circle" color="#5465FF" />Soyun Park</Title>
         
                <ul className={isMenuOpen ? 'active' : ''}> 
                <li><a href="#about-me">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                </ul>
          
                <Button onClick={toggleMenu}>
                <i className="fa fa-bars" style={{ fontSize: "24px", color: "#5465FF" }}></i>
              </Button>

          </NavBar>
 
        </Wrapper>
        )

    }



    export default Nav