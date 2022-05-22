import './Messages.css'
import MessageItem from "../MessageItem/MessageItem";
import io from 'socket.io-client'

const messages = [{
    id: 0,
    login: 'den',
    message: 'aboba',
},
{
    id: 1,
    login: 'den',
    message: 'aboba',
},
{
    id: 2,
    login: 'den',
    message: 'aboba',
},
{
    id: 3,
    login: 'den',
    message: 'aboba',
},
{
    id: 4,
    login: 'den',
    message: 'aboba',
},
{
    id: 5,
    login: 'den',
    message: 'aboba',
},
{
    id: 6,
    login: 'den',
    message: 'aboba',
}]

const Messages = () => {
    const socket = io('http://localhost:4000')

    socket.emit('message:get')

    

    return (
        <div className='chat-messagesContainer'>
            <div className='chat-messages'>
                {messages.map(message => <MessageItem id={message.id} login={message.login} message={message.message} key={message.id}></MessageItem>)}
            </div>
        </div>
    )
}

export default Messages;