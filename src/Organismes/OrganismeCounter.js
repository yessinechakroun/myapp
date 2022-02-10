import React from 'react'
import { Icon, Input, Text } from '../designSystem/Atom'

function OrganismeCounter(props) {
    return (
        <>
            <div onClick={props.logOut} className='flex item-center pointer absolute top-5 right-5' >
                <Text
                    text='Log Out'
                />
                <Icon
                    icon='switch'
                    className='small-icon red ml-2'
                />
            </div>
            <div className='flex justify-center item-center form-container mx-auto p-5'>
                <Icon
                    onClick={() => props.onChangeCounter('DECREMENT')}
                    icon='circle-left'
                    className='big-icon pointer mr-4' />
                <Input
                    readOnly
                    value={props.counter}
                    className='text-center'
                />
                <Icon
                    onClick={() => props.onChangeCounter('INCREMENT')}
                    icon='circle-right'
                    className='big-icon pointer ml-4' />
            </div>
        </>
    )
}

export default OrganismeCounter