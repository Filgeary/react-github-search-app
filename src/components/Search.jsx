import { debounce } from 'lodash-es'
import React, { useEffect, useState } from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'

const Search = ({ onChangeInput, defaultValue, isMobile }) => {
  const [controlValue, setControlValue] = useState('')

  const formatInputValue = evt => evt.target.value.trim()
  const debouncedOnChangeInput = debounce(onChangeInput, 500)

  // set defaultValue only when Mount!
  useEffect(() => {
    setControlValue(defaultValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = evt => {
    const inputValue = formatInputValue(evt)
    if (inputValue) debouncedOnChangeInput(inputValue)
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const inputValue = evt.target[0].value?.trim()
    if (inputValue) debouncedOnChangeInput(inputValue)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Container className='d-flex justify-content-between'>
          <FloatingLabel
            label='Search Users...'
            controlId='floatingInput'
            className='w-100'
          >
            <Form.Control
              type='text'
              placeholder='react'
              onChange={!isMobile ? handleChange : undefined}
              defaultValue={controlValue}
            />
          </FloatingLabel>

          {isMobile && (
            <Button
              type='submit'
              style={{ minWidth: 'max-content' }}
              variant='secondary'
            >
              Search
            </Button>
          )}
        </Container>
      </Form.Group>
    </Form>
  )
}

export default Search
