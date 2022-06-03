import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import AlertComponent from './AlertComponent'
import { debounce } from 'lodash'

const Search = ({ onChangeInput }) => {
  const [isInputValue, setIsInputValue] = useState(true)

  const formatInputValue = evt => evt.target.value.trim().toLowerCase()
  const debouncedFunc = debounce(onChangeInput, 500)

  const onChange = evt => {
    const value = formatInputValue(evt)

    if (value) {
      setIsInputValue(true)
      debouncedFunc(value)
    } else {
      setIsInputValue(false)
    }
  }

  return (
    <>
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

      {!isInputValue && (
        <AlertComponent
          variant='danger'
          heading='Empty Search!'
        />
      )}
    </>
  )
}

export default Search
