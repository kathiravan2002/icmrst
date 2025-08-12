import React from 'react'
import About from '../shared/components/About'
import HelmetComponent from './HelmetComponent'

function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Multidisciplinary Research in Science and Technology'} canonical={'https://icmrst.org/about'}/>
      <About/>
      </div>
  )
}

export default Aboutpage