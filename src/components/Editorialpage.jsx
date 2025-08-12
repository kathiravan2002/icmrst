import React from 'react'
import Editorial from '../shared/components/Editorial'
import HelmetComponent from './HelmetComponent'

function Editorialpage() {
  return (
    <div>
      <HelmetComponent title={'Editorial Board - International Conference on Multidisciplinary Research in Science and Technology'} canonical={'https://icmrst.org/editorial-board'} />
      <Editorial />
    </div>
  )
}

export default Editorialpage