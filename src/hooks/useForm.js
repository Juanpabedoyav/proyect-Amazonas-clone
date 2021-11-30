import {useState} from 'react'

export const useForm = (initialState={})=>{
const [Form, setForm]  = useState({})

const handleInput = ({target})=>{
    setForm({
        ...Form,
        [target.name]: target.value,

    });
}
const  reset = ()=>{
    setForm(initialState)
}
return [Form, handleInput, reset];
}
