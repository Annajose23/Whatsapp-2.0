import styled from 'styled-components';
import {Avatar, IconButton, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';

function Sidebar() {

    const createChat = () => {
        const input = prompt('Please enter the email address of the person you would like to chat');
        if(!input) return null;
        if(EmailValidator.validate(input)){
            //we need to add chat to db
        }
    }

    return (
        <Container>
          <Header>
          <UserAvatar/>
          <IconsContainer>
              <IconButton>
              <ChatIcon/>
              </IconButton>
              <IconButton>
              <MoreVertIcon/>
              </IconButton>
          </IconsContainer>
          </Header>
          <Search>
              <IconButton>
              <SearchIcon/>
              </IconButton>
              <SearchInput placeholder="Search in chats"/>
              </Search>
              <SidebarButton onClick={createChat}>
                  Start a new chat
              </SidebarButton>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`
`;
const Search = styled.div`
display: flex;
align-items: center;
padding:5px;
border-radius: 2px;
`;
const SidebarButton = styled(Button)`
width: 100%;
&&&{
    border-bottom: 1px solid whitesmoke;
    border-top:1px solid whitesmoke;
}
`;
const SearchInput = styled.input`
outline-width: 0;
border:none;
flex:1;
`;
const Header = styled.div`
display:flex;
position:sticky;
top:0;
background-color: white;
z-index:1;
justify-content: space-between;
align-items: center;
padding: 15px;
border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
cursor: pointer;
:hover{
    opacity: 0.8;
}
`;

const IconsContainer = styled.div`
`;

