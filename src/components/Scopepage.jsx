import React from 'react'
import Scope from '../shared/components/Scope'
import HelmetComponent from './HelmetComponent'

function Scopepage() {
  return (
    <div>
      <HelmetComponent title={'Scope of Conference - International Conference on Multidisciplinary Research in Science and Technology'} canonical={'https://icmrst.org/scope'} />
      <Scope />
    </div>
  )
}

export default Scopepage