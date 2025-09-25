import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column
    align-items: center;
    justify-content: center;
    `;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
    `;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
    `;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  overflow: hidden;
`;

const GridItem = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  h3, p {
  margin: 0;
  }
`;

function PostViewPage(props) {
    const navigate= useNavigate();
    const { postId } = useParams();

    const post = data.find((item)=> {
        return item.id == postId;
    });
    const projectDetail = post.project;
              
    
    return (
        <Wrapper>
          <Container>
            <Button title="Back" onClick={() => navigate("/")} />
            <PostContainer>
                <TitleText>{post.title}</TitleText>
                <TitleText>Summary</TitleText>
                <ContentText>{post.content}</ContentText>
                <TitleText>What this project is about?</TitleText>
                {post.description}
                <GridContainer>
                    {Object.keys(projectDetail).slice(0, -1)
                    .map((title, index) => (
                    <GridItem key={`${index}-${title}`}>
                        <h3>{title}</h3>
                        <p>{projectDetail[title]}</p>
                    </GridItem>
                    ))}
                </GridContainer>


             
            </PostContainer>
          </Container>
        </Wrapper>
        );
}

export default PostViewPage





