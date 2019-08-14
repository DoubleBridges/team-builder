import React from 'react'
import { Card } from 'semantic-ui-react'


const TeamMember = (props) => {

    const extra = (
        <section>
            <h4>Favorite Language</h4>
            <p>{props.favLang}</p>
            <span>Click Card Item To Edit</span>
        </section>
    )

    return (
        <Card
            link
            header={`${props.firstName} ${props.lastName}`}
            meta={props.role}
            description={props.about}
            extra={extra}
            onClick={props.editMember}
        />
    )
}

export default TeamMember