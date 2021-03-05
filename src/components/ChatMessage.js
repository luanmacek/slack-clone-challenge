import React from 'react'
import styled from 'styled-components'

function ChatMessage({text,name,image,timestamp}) {
    return (
        <Container>
            <Message>
                <UserAvatar><img src={image}></img></UserAvatar>
                <MessageContent>
                    <MessageName>
                        {name}
                        <span>{timestamp}</span>
                    </MessageName>
                    <MessageText> {text}</MessageText>
                </MessageContent>
            </Message>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display:flex;
    align-items:center;
    :hover{
        background: rgba(83,39,83,.13);
        transition:0.3s;
    }
`
const Message = styled.div`
    height: 40px;
    display: flex;
`
const UserAvatar = styled.div`
    height: 36px;
    width:36px;
    border-radius:2px; 
    overflow:hidden;
    margin-right: 8px;
    img{
        width:100%;
    }
`

const MessageContent = styled.div`
    display:flex;
    flex-direction: column;

`

const MessageName = styled.div`
    font-weight: 900;   
    font-size:15px;
    line-height 1.4;
    span{
        margin-left:8px;
        font-weight:400;
        color:rgb(97,96,97);
        font-size:13px;
    }

`
const MessageText = styled.div`
    
`