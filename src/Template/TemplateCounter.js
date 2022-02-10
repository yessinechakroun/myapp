import React from 'react'
import OrganismeCounter from '../Organismes/OrganismeCounter'

function TemplateCounter(props) {
    return (
        <div className='vh-100 flex item-center'>
            <OrganismeCounter
                onChangeCounter={props.onChangeCounter}
                counter={props.counter}
                logOut={props.logOut}
            />
        </div>
    )
}

export default TemplateCounter