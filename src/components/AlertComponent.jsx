import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const AlertComponent = ({ variant, heading, text }) => {
  const [isShow, setIsShow] = useState(true)

  return (
    isShow && (
      <Alert
        className='mb-0 px-2 px-md-3'
        variant={variant}
        onClose={() => setIsShow(false)}
        dismissible
        transition
      >
        <Alert.Heading>{heading}</Alert.Heading>
        <p className='mb-0'>{text}</p>
      </Alert>
    )
  )
}

export default AlertComponent
