import React from 'react'
import OrganismeLogin from '../Organismes/OrganismeLogin'

function TemplateLogin(props) {
    return (
        <div className='vh-100 flex item-center' >
            <OrganismeLogin
                state={props.state}
                changeInput={props.changeInput}
                submit={props.submit}
            />
        </div>
    )
}

export default TemplateLogin