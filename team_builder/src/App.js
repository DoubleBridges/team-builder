import React, { useState } from 'react';

import './App.css';

import Team from './components/Team';
import MemberForm from './components/Form2';
import { members as membersList } from './memberList'

function App() {
  const [members, setMembers] = useState(membersList);
  const newMember = member => {
    setMembers([...members, member])
  }
  return (
    <div className="App">
      <MemberForm newMember={newMember} />
      <Team members={members} />
    </div>
  );
}

export default App;
