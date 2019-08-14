import React from 'react'
import { Card } from 'semantic-ui-react'


const TeamMember = (props) => {

    const extra = (
        <section>
            <h4>Favorite Language</h4>
            <p>{props.favLang}</p>
            <span>Click to Edit</span>
        </section>
    )

    const editMember = e => {
        console.log(e.target)
    }

    return (
        <Card
            link
            header={`${props.firstName} ${props.lastName}`}
            meta={props.role}
            description={props.about}
            extra={extra}
            onClick={editMember}
        />
    )
}

export default TeamMember