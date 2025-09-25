import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 10px;
 
  
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 28px solid ${({ color }) => color};
  
`;

const Rectangle = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${({ color }) => color}; 
  
`;

const Shape = ({ shape, color }) => {
  if (shape === 'circle') {
    return <Circle color={color} />;
  } else if (shape === 'triangle') {
    return <Triangle color={color} />;
  } else if (shape === 'rectangle') {
    return <Rectangle color={color} />;
  } else {
    return null;
  }
};

export default Shape;
