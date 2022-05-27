import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const Search = () => {
  return (
    <Form>
      <Form.Group>
        <FloatingLabel
          label='Type here...'
          controlId='floatingInput'
        >
          <Form.Control
            type='text'
            placeholder='react'
            onChange={evt => console.log(evt.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
    </Form>
  )
}

export default Search
