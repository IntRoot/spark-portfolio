 
import styled, { css, keyframes } from 'styled-components';
import Skill from './Skill';
import TitleText from '../ui/Title';
const Wrapper = styled.div`
 
  display: grid;
 
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  background-color: white;
  border-radius: 18px;
  padding: 50px 80px 50px 80px;
  
  & > h1 {
   grid-column: span 2;
   }
 

 @media (max-width: 768px) { 
    grid-template-columns: 1fr;
    justify-items: center;
 
    & > h1 {
   grid-column: span 1;
   }
  }


 
 `;
 
function SkillsList(props) {
  const { skills } = props;
      
      
  return (
     <Wrapper id="skills">
          <TitleText>My <span>Skills</span></TitleText>
       
    
          {skills.map((skill, index) =>{
            return (
              <Skill skill={skill} />
                  )
          })}
          
        </Wrapper>
  
  );
}

  

export default SkillsList;