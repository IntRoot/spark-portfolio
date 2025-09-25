import React from 'react';
import styled from 'styled-components';

function Footer() {

const Wrapper = styled.footer`
     
//    background: linear-gradient(rgba(242,245,248,1) 0%, rgba(223,226,230,1) 80%, rgba(199,201,204,1) 100%);
    color: black;
    width: 100%;
    padding: 40px 20px 20px 40px;
 
    text-align: center;
    position: relative;  
    z-index: 10;  
  `;


    return (
        <Wrapper>
            © Soyun Park
        </Wrapper>
    );


    }

    export default Footer;
    