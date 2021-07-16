import styled from 'styled-components';

function Message({user,message}) {
    return (
        <Conatiner>
            <p>{message}</p>
        </Conatiner>
    )
}

export default Message

const Conatiner = styled.div``;
