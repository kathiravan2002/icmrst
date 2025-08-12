import React from 'react'
import Home from '../shared/components/Home'
import HelmetComponent from './HelmetComponent'

function Homepage() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Multidisciplinary Research in Science and Technology'} canonical={'https://icmrst.org/'} />
      <Home />
    </div>
  )
}

export default Homepage