import React from 'react'
import { Icon, Input, Text } from '../designSystem/Atom'

function OrganismeLogin(props) {
    return (
        <div
            className='flex justify-center item-center flex-direction-column form-container mx-auto p-5'
        >
            <Text text='Login' />
            <Input
                placeholder='Ajouter email'
                onChange={(e) => props.changeInput(e, 'mail')}
                value={props.state.mail.value}
                isValid={props.state.mail.isValid}
                isInvalid={props.state.mail.isInvalid}
                className='w-100 mb-5'
            />
            <Input
                placeholder='Ajouter password'
                onChange={(e) => props.changeInput(e, 'password')}
                type='password'
                value={props.state.password.value}
                isValid={props.state.password.isValid}
                isInvalid={props.state.password.isInvalid}
                className='w-100 mb-5'
            />
            <div
                onClick={props.submit}
                className='flex item-center pointer'
            >
                <Text
                    text='Confirmer'
                    type='h4'
                />
                <Icon
                    icon='circle-right'
                    className='small-icon ml-2'
                />
            </div>
        </div>
    )
}

export default OrganismeLogin