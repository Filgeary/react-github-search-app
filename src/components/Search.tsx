import { debounce } from 'lodash-es'
import React, { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'

type Props = {
  onChangeInput: (user: string) => void
  defaultValue: string
  isMobile: boolean | undefined
}
const Search: FC<Props> = ({ onChangeInput, defaultValue, isMobile }) => {
  const [defaultInputValue, setDefaultInputValue] = useState('')
  const inputRef = useRef('')

  const formatInputValue = (evt: ChangeEvent<HTMLInputElement>): string => evt.target.value.trim()
  const debouncedOnChangeInput = debounce(onChangeInput, 500)

  // set defaultValue only when Mount!
  useEffect(() => {
    setDefaultInputValue(defaultValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const value = formatInputValue(evt)

    if (value) {
      inputRef.current = value
    }
    if (value && !isMobile) {
      debouncedOnChangeInput(value)
    }
  }

  const onSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()

    if (inputRef.current) {
      debouncedOnChangeInput(inputRef.current)
    }
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
              onChange={handleChange}
              defaultValue={defaultInputValue}
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
