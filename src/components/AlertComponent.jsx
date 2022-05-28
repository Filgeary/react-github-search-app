import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const AlertComponent = ({ variant, heading, text }) => {
  const [isShow, setIsShow] = useState(true)

  return (
    isShow && (
      <Alert
        variant={variant}
        onClose={() => setIsShow(false)}
        dismissible
        transition
      >
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{text}</p>
      </Alert>
    )
  )
}

export default AlertComponent