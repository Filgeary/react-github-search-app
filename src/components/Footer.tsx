import React, { FC } from 'react'
import { Container } from 'react-bootstrap'

const Footer: FC = () => (
  <Container
    fluid
    style={{
      minHeight: 12,
      background: 'linear-gradient(45deg, #212529, #0d6efd, #0dcaf0, #ffc107)',
    }}
    className='mt-auto'
  />
)

export default Footer
