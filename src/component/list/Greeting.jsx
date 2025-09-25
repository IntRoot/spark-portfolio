import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import importImage from './ImportImage'
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  border-radius: 18px;
  
  padding: 120px 94px 120px 94px;
  gap: 140px;
`;

const Container = styled.div`
  display: flex;

  flex-direction: column;
`;

const TitleText = styled.h2`
  font-size: 50px;
  margin-bottom: 0px; 
`;


const Introduction = styled.div`
    color: black;
    font-size: 20px;
    p {
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        border-right: 6px solid;

        animation: typing 2.2s steps(18, end) forwards, cursor 1s 10;
            } 

    @keyframes typing {
        from {
            width: 0;
            border-right-color: black;
          }
          99% {
            border-right-color: black;
          }
          to {
            width: 100%;
            border-right-color: transparent;
          }
        }
    }

    @keyframes cursor {
     
       50% {border-right-color: transparent}
       
      }
    }
    
`
function Greeting() {
  const [imageSrc, setImageSrc] = useState('');
  useEffect(() => {
              const imagePath = 'dice2.png'; 
              importImage(imagePath, setImageSrc);
          }, []);

  return (
    <Wrapper>
     
      <Container>
      
          <TitleText>
            Hello!
          </TitleText>
          <Introduction><p>Welcome to my portfolio. My name is Soyun –</p></Introduction>
    
      
      </Container>
      <img src={imageSrc} alt="Background" style={{ width: '400px', height: '400px'}} />
    </Wrapper>
  );
}

export default Greeting;
