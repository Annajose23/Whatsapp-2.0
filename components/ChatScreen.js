import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, db} from '../firebase';
import {useRouter} from 'next/router';
import {Avatar, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {useCollection} from 'react-firebase-hooks/firestore';

function ChatScreen({chat, messages}) {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const [messagesSnapshot] = useCollection(db.collection('chats').doc(router.query.id).collection('messages').orderBy('timestamp', 'async'));
    const showMessages = () => {
        if(messagesSnapshot){
            return messagesSnapshot.docs.map(message => (
                <Message
                key={message.id}
                user={message.data().user}
                message={{
                    ...message.data(),
                    timestamp:message.data().timestamp?.toDate().getTime(),
                }}/>
            ))
        }
    }
    return (
        <Container>
            <Header>
            <Avatar/>
            <HeaderInformation>
                <h3>rec email</h3>
                <p>last seen</p>
            </HeaderInformation>
            <HeaderIcons>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </HeaderIcons>
            </Header>
            <MessageContainer>
                {showMessages()}
                <EndOfMessage/>
            </MessageContainer>
            <InputContainer>
            </InputContainer>
        </Container>
    )
}

export default ChatScreen

const Container = styled.div``;

const Header = styled.div`
position:sticky;
background-color:white;
z-index:100;
top:0;
display:flex;
padding:11px;
height:80px;
align-items:center;
border-bottom:1px solid whitesmoke;`;

const HeaderInformation = styled.div`
margin-left:15px;
flex:1;
>h3{
    margin-bottom: 3px;
}
>p{
    font-size: 14px;
    color:gray;
}
`;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div``;

const EndOfMessage = styled.div``;

const InputContainer = styled.div``;