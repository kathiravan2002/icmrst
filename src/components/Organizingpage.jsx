import React from 'react'
import Organizing from '../shared/components/Organizing'
import HelmetComponent from './HelmetComponent'

function Organizingpage() {
  return (
    <div>
      <HelmetComponent title={'Organizing Committee - International Conference on Multidisciplinary Research in Science and Technology'} canonical={'https://icmrst.org/organizing-committee'} />
      <Organizing />
    </div>
  )
}

export default Organizingpage