import React from 'react'
import Papersubmission from '../shared/components/Papersubmission'
import HelmetComponent from './HelmetComponent'

function Papersubmissionpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Multidisciplinary Research in Science and Technology'} canonical={'https://icmrst.org/paper-submission'} />
      <Papersubmission />
    </div>
  )
}

export default Papersubmissionpage