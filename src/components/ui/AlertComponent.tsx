import React, { FC, useState } from 'react'
import { Alert } from 'react-bootstrap'

type Props = {
  variant: string
  heading: string
  text?: string
  isDismissible?: boolean
}
const AlertComponent: FC<Props> = ({ variant, heading, text = '', isDismissible = true }) => {
  const [isShow, setIsShow] = useState(true)

  return isShow ? (
    <Alert
      className='mb-0 px-2 px-md-3'
      variant={variant}
      onClose={() => setIsShow(false)}
      dismissible={isDismissible}
      transition
    >
      <Alert.Heading>{heading}</Alert.Heading>
      {text && <p className='mb-0'>{text}</p>}
    </Alert>
  ) : null
}

export default AlertComponent
