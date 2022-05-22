import './Modal.css'
import { useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

const Modal = () => {
    const { handleSubmit, register, reset } = useForm()
    const [modalVisibility, setModalVisibility] = useState(true)

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        sessionStorage.setItem('login', data.login)
        reset()
        setModalVisibility(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={modalVisibility ? 'modal_visible' : 'modal_invisible'}>
            <div>Enter your login:</div>
            <input {...register('login')}></input>
            <button type='submit' className='form-button'>submit</button>
        </form>
    )
}

export default Modal;