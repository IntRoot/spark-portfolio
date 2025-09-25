import React from 'react';
import styled from 'styled-components';
import TitleText from '../ui/Title';
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 18px;
    background-color: white;
    padding: 20px 0 20px 0;
    

`;

const Align= styled.div`
  padding-left: 80px;
      & > p {
      color: #888888; 
      font-weight: bold;
    }
 `;

const Box = styled.div`
  width: 200px;
  text-align: start;
  margin: 10px;
  display: inline-block;
  color: #888888;
  font-weight: bold;
 
`
;

const BoxContainer = styled.div`
  
  max-width: 480px;
  margin: 40px 0 40px 0;
`
function AboutMe() {
 

  return (
    <Wrapper id="about-me">
   
        <Align>
            
  
          <TitleText>
            About <span>Me</span>
          </TitleText>
        
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </p>
    <b> Lorem ipsum dolor sit amet, consectetur adipiscing elit,  </b>
 
    <br />
    <p> sdf asf  asdf sdf s sdf </p>
    <b>s sdf  s  s d dfjo sjdfio jo sdf </b>
    <p>sdf asf asdf sdf s sdf </p>
    <BoxContainer>
        <Box>Email: </Box>
        <Box>LinkedIn: </Box>
        <Box>Git Hub: </Box>
        <Box>Notion Blog:  </Box>
    </BoxContainer>
    </Align>
    </Wrapper>
  );
}

export default AboutMe;
