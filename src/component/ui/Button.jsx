import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
 
    font-size: 16px;
 
    cursor: pointer;
    
  
    background-color: transparent;
 
 
    transition: box-shadow 0.3s ease; 
    padding: 10px;
    border: 1px solid #000;
    margin-bottom: 60px;
    &:hover {
        border: 2px solid #000 !important;
        box-shadow: 4px 4px #5465FF;  
    }
    `;

    function Button(props) {
        const { title, onClick } = props; 
        return (
            <StyledButton onClick={onClick}>
                 {title || "button"} &#11208;
            </StyledButton>
        );
    }
export default Button;