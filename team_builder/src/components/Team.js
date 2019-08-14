import React from 'react'
import TeamMember from './TeamMember';

import { Card } from 'semantic-ui-react';

const Team = (props) => {

  const createTeam = props.members.map((member, i) => {

    return (
      <TeamMember
        key={i}
        firstName={member.firstName}
        lastName={member.lastName}
        role={member.role}
        about={member.about}
        favLang={member.favLang}
        link="link"
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