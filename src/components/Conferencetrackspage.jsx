import React from 'react'
import Conferencetracks from '../shared/components/Conferencetracks'
import HelmetComponent from './HelmetComponent'

function Conferencetrackspage() {
  return (
    <div>
      <HelmetComponent title={'Conference Tracks - International Conference on Multidisciplinary Research in Science and Technology'} canonical={'https://icmrst.org/conference-tracks'} />
      <Conferencetracks />
    </div>
  )
}

export default Conferencetrackspage