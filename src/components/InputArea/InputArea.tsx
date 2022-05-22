import './InputArea.css'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import io from 'socket.io-client'

const InputArea = () => {
    const { register, handleSubmit} = useForm();
    const socket = io('http://localhost:4000')

    const onSubmit: SubmitHandler<FieldValues> = data => {
        const id = new Date()[Symbol.toPrimitive]('number')
        socket.emit('message:add', {
            id,
            login: sessionStorage.getItem('login'),
            message: data.message
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='chat-inputArea'>
            <textarea placeholder='message...' {...register('message')} className='chat-input'></textarea>
            <button type="submit"  className='chat-button'>send</button>
        </form>
    )
}

export default InputArea;