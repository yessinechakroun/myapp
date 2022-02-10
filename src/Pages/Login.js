import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEmail, isPasswordValid } from '../Helpers/Helpers'
import TemplateLogin from '../Template/TemplateLogin'
import { useDispatch, useSelector } from "react-redux";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const [state, setState] = useState({
        mail: { value: '', isInvalid: false, isValid: false },
        password: { value: '', isInvalid: false, isValid: false }
    })
    useEffect(() => {
        if (auth.token !== null && auth.user !== null) {
            navigate('/counter')
        }
    }, [])

    const changeInput = (e, key) => {
        let newState = { ...state }
        newState[key].value = e.target.value
        if (key === 'mail') {
            newState[key].isInvalid = !isEmail(e.target.value)
            newState[key].isValid = isEmail(e.target.value)
        } else {
            newState[key].isInvalid = !isPasswordValid(e.target.value)
            newState[key].isValid = isPasswordValid(e.target.value)

        }
        setState(newState)
    }
    const submit = () => {
        if (state.mail.isValid && state.password.isValid) {
            dispatch({
                type: 'LOGIN', payload: { token: Math.random(), user: { mail: state.mail } }
            })
            navigate('/counter')

        } else {
            let newState = { ...state }
            newState.mail.isInvalid = true
            newState.password.isInvalid = true
            setState(newState)
        }
    }
    return (
        <TemplateLogin
            state={state}
            changeInput={changeInput}
            submit={submit}
        />
    )
}

export default Login