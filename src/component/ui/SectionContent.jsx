import React from "react";
import styled from 'styled-components';

const StyledSection= styled.section`
    width: calc(100% - 32px);
    ${(props)=> 
        props.height &&
        `
        height: ${props.heigh}px;
    `}
    padding: 16px;
    font-size: 16px;
    border-radius: 8px;
`;

function SectionContent(props) {
    const {height, value } = props;
    return <StyledSection height={height} value={value} />;
}

export default SectionContent;