import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import {useParams} from 'react-router-dom'
function Chat() {
    let {channelId} = useParams();
    const[channel,setChannel] = useState();
    const[messages,setMessages] = useState([]);

    const getMessages = () =>{
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=>doc.data());
            setMessages(messages);
        })
    }
    const getChannel = () =>{
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        });
    }

    useEffect(()=>{
        getChannel();
        getMessages();
    },[channelId])
    return (
        <Container>
            <Header>
                <Channel>
                    <Title># {channel&&channel.name}</Title>
                    <Description>Description</Description>
                </Channel>
                <Details>
                    <div>
                        Details
                    </div>
                    <Info></Info>
                </Details>
            </Header>
            <MessageContainer>
                {                   
                    messages.length > 0 &&
                    messages.map((data,index)=>(
                        <ChatMessage
                        text={data.text}
                        name={data.user}
                        image={data.userImage}
                        timestamp={data.timestamp}
                        />    
                                        
                    ))
                }
            </MessageContainer>
            <ChatInput></ChatInput>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display:grid;
    grid-template-rows: 64px auto min-content;
    width:99%;
    border-right: 1px solid rgba(83,39,83,.13);
`
const Header = styled.div`
    border-bottom: 1px solid rgba(83,39,83,.13);
    display: flex;
    justify-content:space-between;
    padding-left:20px;
    padding-right:20px;
    align-items:center;
`
const Channel = styled.div`
`
const Title = styled.div`
    font-weight: 700;
`
const Description = styled.div`
    font-size: 13px;
    font-weight:400;
    color:#606060;
    margin-top:8px;
`
const Details = styled.div`
    display:flex;
    align-items:center;
    color: #606060;
`
const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`
const MessageContainer = styled.div`
    
`
