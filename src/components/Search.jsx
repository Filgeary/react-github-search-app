import { debounce } from 'lodash'
import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

const Search = ({ onChangeInput, defaultValue, isMobile }) => {
  const [value, setValue] = useState('')

  const formatInputValue = evt => evt.target.value.trim().toLowerCase()
  const debouncedFunc = debounce(onChangeInput, 300)

  // set defaultValue only when Mount!
  useEffect(() => {
    setValue(defaultValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = evt => {
    const inputValue = formatInputValue(evt)

    if (inputValue) debouncedFunc(inputValue)
  }

  const handleKeyUp = evt => {
    if (evt.key === 'Enter') handleChange(evt)
  }

  return (
    <>
      <Form.Group>
        <FloatingLabel
          label='Search Users...'
          controlId='floatingInput'
        >
          <Form.Control
            type='text'
            placeholder='react'
            onChange={!isMobile ? handleChange : undefined}
            onKeyUp={handleKeyUp}
            defaultValue={value}
          />
        </FloatingLabel>
      </Form.Group>
    </>
  )
}

export default Search
