import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Nav from "../list/Nav";
import data from "../../data.json";
import skill_writing from "../../skill.json";
import Greeting from "../list/Greeting";
import SkillsList from "../list/SkillsList";
import AboutMe from "../list/AboutMe";
import Footer from "../list/Footer";

const Container = styled.div`
    & > * {
        margin-bottom: 2%;
    }
`;


const ImageBody = styled.div`
background-image: url(${props => props.image});
padding: 10%;
background-repeat: no-repeat;
background-size: cover; 

&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2); 
    z-index: 1;
}
`;

const RowWrapper = styled.div`
    display: flex;
    justify-content: center;
    
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    
 
`;

const Dash = styled.div`
    
    top: 80px;  
    bottom: 60px;
    // dotted or dashed
    border-left: 2px dotted black;
 
`;

const LeftDash = styled(Dash)`
     margin-right: 100px; 
     justify-content: center;
     
        display: flex;
`;

const RightDash = styled(Dash)`
    margin-left: 100px;
       justify-content: center;
     
        display: flex;
`;

 
const MovingRectangle = styled.div`
  @keyframes moveUpDown {
    0% {
      transform: translateY(-50%) rotate(45deg);
    }
    50% {
      transform: translateY(50vh) rotate(45deg);
    }
    100% {
      transform: translateY(50%) rotate(45deg);
    }
  }

   @keyframes flow {
    0% {
      transform: translateY(-40vh) rotate(45deg);
    }
 
    100% {
      transform: translateY(50vh) rotate(45deg);
    }
  }

  position: fixed;
 
  width: 14px;
  height: 14px;
  top: 50%; 
  background-color: #BFD7FF;
  border-radius: 2px;
  transform: translateY(-50%) rotate(45deg); 
   
   animation: ${(props) => (props.isScrolling ? 'moveUpDown 4s 1' : 'flow 7s infinite')};

   animation-direction: ${(props) => (props.reverse ? "reverse" : "normal")};   
`;


function MainPage(props) {
    const navigate = useNavigate();
    const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        console.log('Scrolling Down');
        setIsScrolling(true);   
      } else {
       
        setIsScrolling(false);  
      }
    };

    
        window.addEventListener('wheel', handleScroll);
    
        return () => {
          window.removeEventListener('wheel', handleScroll);
        };
      }, []);
    return (
        <>
            <Nav />
            <RowWrapper>
                <LeftDash>
                <MovingRectangle isScrolling={isScrolling}/>
                </LeftDash>

                <Wrapper>

                    <Container>
                        <Greeting />
                        <AboutMe/>
                        <PostList
                            posts={data}
                            onClick={(item) => {
                                navigate(`/post/${item.id}`);
                            }}
                        />
                        <SkillsList skills={skill_writing} />
                    </Container>
                 
                </Wrapper>

            <RightDash >
            <MovingRectangle isScrolling={isScrolling} reverse />
             </RightDash>
            
            </RowWrapper>

            <RowWrapper>
            <Footer />
            </RowWrapper>
            
        </>
    );
}

export default MainPage;
