import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TemplateCounter from '../Template/TemplateCounter'

function Counter() {
    const navigate = useNavigate()
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const onChangeCounter = (key) => {
        dispatch({ type: key })
    }
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
    }
    return (
        <TemplateCounter
            counter={counter.counter}
            onChangeCounter={onChangeCounter}
            logOut={logOut}
        />
    )
}

export default Counter