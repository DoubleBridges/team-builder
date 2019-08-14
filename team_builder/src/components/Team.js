import React from 'react'
import TeamMember from './TeamMember';

import { Card } from 'semantic-ui-react';

const Team = (props) => {

  const editMember = e => {
    console.log(e.target.textContent)
  }

  const createTeam = props.members.map((member, i) => {

    return (
      <TeamMember
        key={i}
        firstName={member.firstName}
        lastName={member.lastName}
        role={member.role}
        about={member.about}
        favLang={member.favLang}
        editMember={editMember}
      />
    )
  })

  return (
    <Card.Group
      centered
      itemsPerRow={2}>
      {createTeam}
    </Card.Group>
  )

}

export default Team