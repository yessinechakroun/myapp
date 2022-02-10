import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon, Text } from '../designSystem/Atom'

function NotFound() {
    const navigate = useNavigate()
    return (
        <div className='vh-100 flex justify-center item-center flex-direction-column'>
            <Text text='404 Page not found !' />
            <div onClick={() => navigate('/')} className='flex item-center pointer' >
                <Text text='Back to login' type='h3' />
                <Icon icon='undo2' className='small-icon ml-2' />
            </div>
        </div>
    )
}

export default NotFound