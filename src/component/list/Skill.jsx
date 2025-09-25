import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import importImage from './ImportImage'

const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
padding: 40px;

`;

const TitleText = styled.h2`
 
  justify-self: center;
`;

const SkillBox = styled.div`
  border-style: solid;
  border-width: 2px;
  border-color: #EBEBEB;
  border-radius: 18px;
  width: 40vw;
  max-width: 400px;
  height: 260px;
  
`

const ProjectImage = styled.img`

    margin-left: 70px;
    width: 250px;
    height: 350px;

    align-self: center;
  
 
 
  
    `;

const Description = styled.p`
 line-height: 1.5;
    margin: 0;
    word-break: break-word; 
    color: #888888;
    font-weight: bold;
`
function Skill(props) {
  const { skill } = props; // Access the "name" prop

  const [images, setImages] = useState([]);

  //   const skillImage = {
  //   "frontEnd": ['HTML.svg', 'CSS.svg', 'js.svg', 'node.svg', 'react.svg'],
  //   "backEnd": ['python.svg', 'mysql.svg'],
  //   "networking": [],
  //   "deployment": ['digitalocean.svg', 'netlify.png', 'vagrant.svg'],
  //   "collab": ['trello.svg', 'figma.svg'],
  //   "versionControl": ['git.svg', 'github.svg'],
  //   "securityAndNetwork": ['linux.svg', 'wireshark.png']
  // };

   

  return (
    <SkillBox>
    <Wrapper>
    
    <TitleText>{skill.title}</TitleText>
   
            <Description>{skill.content}</Description>
            {/* <Icon src={imageSrc} alt={skill.images} /> */}
 
      
    </Wrapper>
    </SkillBox>
  );

}
export default Skill;
