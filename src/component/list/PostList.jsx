import React from "react";
import styled from 'styled-components';
import PostListItem from "./PostListItem";
import Button from "../ui/Button";

const Wrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > * {
  
        margin-bottom: 2%;
    }
   
 
`;

function PostList(props) {
    const { posts, onClick } = props;

    return (
        <Wrapper id="project">
            {posts.map((post, index) =>{
                return (
                    
                    <PostListItem 
                        key={post.id}
                        post={post}
                        onClick={()=> {
                            onClick(post);
                        }}
                    />
                );
            }
            )}
        </Wrapper>
    );
}

export default PostList;