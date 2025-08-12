import React from 'react'
import Datesandbank from '../shared/components/Datesandbank'
import HelmetComponent from './HelmetComponent'

function Datesandbankpage() {
  return (
    <div>
      <HelmetComponent title={'Key Dates - International Conference on Multidisciplinary Research in Science and Technology'} canonical={'https://icmrst.org/key-dates'} />
      <Datesandbank />
    </div>
  )
}

export default Datesandbankpage