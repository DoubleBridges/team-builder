import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components'


const FormContainer = styled.section`
  margin:80px;
`;

const MemberForm = (props) => {

  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    role: "",
    favLang: "",
    about: ""
  });

  const changeHandler = e => {
    setMember({ ...member, [e.target.name]: e.target.value })
  }

  const roleHandler = e => {
    setMember({ ...member, role: e.target.textContent })
  }

  const langHandler = e => {
    setMember({ ...member, favLang: e.target.textContent })
  }

  const submitForm = e => {
    console.log(member)
    e.preventDefault()
    props.newMember(member)
  }

  useEffect(() => {
    setMember({
      firstName: "",
      lastName: "",
      about: ""
    });

  }, [props.newMember]);

  return (
    <FormContainer>
      <Form onSubmit={submitForm}>
        <Form.Group widths='equal'>
          <Form.Input fluid name="firstName" label='First name' value={member.firstName} placeholder='First name' onChange={changeHandler} />
          <Form.Input fluid name="lastName" label='Last name' value={member.lastName} placeholder='Last name' onChange={changeHandler} />
        </Form.Group>
        <Form.Group inline>
          <label>Role</label>
          <Form.Radio
            label='UX'
            value='UX'
            onChange={roleHandler}
          />
          <Form.Radio
            label='UI'
            value='UI'
            onChange={roleHandler}
          />
          <Form.Radio
            label='Front End'
            value='Front End'
            onChange={roleHandler}
          />
          <Form.Radio
            className="role"
            label='Back End'
            value='Back End'
            onChange={roleHandler}
          />
        </Form.Group>
        <Form.Group inline>
          <label>Favorite Language</label>
          <Form.Radio
            label='Javascript'
            value='js'
            onChange={langHandler}
          />
          <Form.Radio
            label='C#'
            value='C#'
            onChange={langHandler}
          />
          <Form.Radio
            label='Java'
            value='Java'
            onChange={langHandler}
          />
          <Form.Radio
            label='Swift'
            value='Swift'
            onChange={langHandler}
          />
          <Form.Radio
            label='Go'
            value='Go'
            onChange={langHandler}
          />
          <Form.Radio
            label='Rust'
            value='Rust'
            onChange={langHandler}
          />
        </Form.Group>
        <Form.TextArea name='about' label='About' value={member.about} placeholder='Tell us more about you...' onChange={changeHandler} />
        <Form.Button>Submit</Form.Button>
      </Form>
    </FormContainer>
  )
}

export default MemberForm