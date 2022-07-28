import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import AlertComponent from './AlertComponent'

const NotFound404: FC = () => {
  return (
    <Container>
      <AlertComponent
        variant='warning'
        heading='Not Found Page!'
        text='Try to go Home'
      />
    </Container>
  )
}

export default NotFound404
