import './MessageItem.css'

interface Imessage {
    id: number;
    login: string;
    message: string;
}


const MessageItem = ({id, login, message}: Imessage) => {
    return (
        <div className={login ? 'chat-message' : 'chat-userMessage'}>
            <div className='message-login'>{login}</div>
            <div className='message-text'>{message}</div>
        </div>
    )
}

export default MessageItem;