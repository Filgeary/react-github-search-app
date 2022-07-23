import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import About from '../components/About'
import { TECH_STACK_AND_TOOLS_LIST } from '../constants'

const AboutPage: FC = () => {
  return (
    <Container>
      <h1 className='visually-hidden'>About</h1>

      <About dataList={TECH_STACK_AND_TOOLS_LIST} />
    </Container>
  )
}

export default AboutPage
