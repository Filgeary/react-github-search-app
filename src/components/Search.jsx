import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import AlertComponent from './AlertComponent'
import { debounce } from 'lodash'

const Search = ({ onChangeInput, query }) => {
  const [isInputValue, setIsInputValue] = useState(true)
  const [value, setValue] = useState('')

  const formatInputValue = evt => evt.target.value.trim().toLowerCase()
  const debouncedFunc = debounce(onChangeInput, 300)

  useEffect(() => {
    if (query) setValue(query)
  }, [query])

  const handleChange = evt => {
    const value = formatInputValue(evt)

    if (value && value.length > 1) {
      setIsInputValue(true)
      debouncedFunc(value)
    } else {
      setIsInputValue(false)
    }
  }

  const handleKeyUp = evt => {
    if (evt.key === 'Enter') handleChange(evt)
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
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            value={value}
          />
        </FloatingLabel>
      </Form.Group>

      {!isInputValue && (
        <AlertComponent
          variant='danger'
          heading='Need minimum 2 letters!'
        />
      )}
    </>
  )
}

export default Search
