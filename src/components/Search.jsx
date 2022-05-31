import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const Search = () => {
  const formatInputValue = evt => evt.target.value.trim().toLowerCase()

  const onChange = evt => {
    const value = formatInputValue(evt)
    if (value) console.log(value)
  }

  return (
    <Form onSubmit={evt => evt.preventDefault()}>
      <Form.Group>
        <FloatingLabel
          label='Type here...'
          controlId='floatingInput'
        >
          <Form.Control
            type='text'
            placeholder='react'
            onChange={onChange}
          />
        </FloatingLabel>
      </Form.Group>
    </Form>
  )
}

export default Search
