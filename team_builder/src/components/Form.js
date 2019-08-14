import React from 'react'

const MemberForm = () => {

  return (
    <form>
      <label for="name" hidden></label>
      <input type="text" name="name" id="name" placeholder="Name"></input>
      <label for="role" hidden></label>
      <input type="text" name="role" id="role" placeholder="Role"></input>
      <label for="experience" hidden></label>
      <input type="text" name="experience" id="experiance" placeholder="Experience"></input>
    </form>
  )
}

export default MemberForm