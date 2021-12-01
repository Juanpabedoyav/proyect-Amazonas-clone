import {useState} from 'react'

export const useForm = (initialState={})=>{
const [form, setForm]  = useState({})

const handleInput = ({target})=>{
    setForm({
        ...form,
        [target.name]: target.value,

    });
}
const  reset = ()=>{
    setForm(initialState)
}
return [form, handleInput, reset];
}
