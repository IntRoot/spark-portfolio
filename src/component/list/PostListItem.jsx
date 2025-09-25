import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from "../ui/Button";
import importImage from './ImportImage'
 

const Wrapper = styled.div`
    display: grid;
 
    background-color: white;
    border-radius: 18px;
    grid-template-areas: 
        "title"
        "subtitle"
        "image"
        "button"
        "description";
    grid-template-columns: 1fr;
    padding: 70px 200px 70px 200px;
    

    @media (min-width: 965px) {
    padding: 70px 100px 70px 100px;
        grid-template-areas: 
            "title description"
            "subtitle button"
            "image image";
        grid-template-columns: 1fr 1fr;
        
    }
    
    
`;

const Container = styled.div`
  grid-area: title;
  position: relative;
  z-index: 1;
 
`;

 

const SubTitle = styled.div`
 grid-area: subtitle;
 color: #888888;
 font-weight: bold;
`;

const ProjectImage = styled.img`

   @media (min-width: 965px) {
    width: 800px;
    height: 500px;

    align-self: center;
  
   
 
  }
    grid-area: image;
    align-self: center;
    width: 400px;
    padding: 40px 0 40px 0;
    height: 250px;
    `;

const Description = styled.p`
  
    white-space: pre-line;
    width: 400px;
    grid-area: description;
    margin-bottom: 50px;
 ; 
`
 

const ButtonWrapper = styled.div`
    grid-area: button;

`;

const Highlight = styled.span`
 @keyframes highlight {
    0% {
      width: 0%;
      opacity: 0;
    }
    100% {
      width: 140px;
      opacity: 1;
    }
  
  }

    position: absolute;
    left: 0;
    top: 32px;
    z-index: -1;
    background: linear-gradient(90deg, rgba(84,101,255,0.3) 0%, rgba(84,101,255,0.5) 95%, rgba(84,101,255,1) 100%);
    //  rgb(84, 101, 255, 0.4);
     
    height: 18px;
    width: 0%;
    &.in-view {
    animation: highlight 0.6s forwards;
  }
  

`;


 
function PostListItem(props) {
  const { post, onClick } = props;
  // const projectDetail = post.project;
  const [imageSrc, setImageSrc] = useState('');
  const [inView, setInView] = useState(false);
  const Ref = useRef(null)
  
  useEffect(() => {
    const loadImages = async () => {
      await importImage(post.images, setImageSrc);
    };

    loadImages();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when in view
        }
      })
      if (Ref.current) {
        observer.observe(Ref.current);
      }
  
      return () => {
        if (Ref.current) {
          observer.unobserve(Ref.current);
        }
      };
    }, [post]);
      
      
        return (
          <Wrapper>
       
            <Container> 
            <h1 style={{margin: "10px 0 10px 0"}}>{post.title}<Highlight ref={Ref} className={inView ? 'in-view' : ''}></Highlight></h1>
            <SubTitle>{post.subtitle}</SubTitle>
            </Container>
            <ButtonWrapper>
                <Button
                    title="README"
                    onClick={() => {
                    onClick(post);
                    }}
                >

 
                   
                </Button>
              
            </ButtonWrapper>
            <Description>{post.content}</Description>
            <ProjectImage src={imageSrc} alt={post.images} />
            
          </Wrapper>
        );
      }

export default PostListItem;