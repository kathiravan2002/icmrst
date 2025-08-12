import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({ title, canonical }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content="ICMRST, International Conference on Multidisciplinary Research in Science and Technology  ,ICMRST, multidisciplinary research, science conference, technology conference, research conference, innovation, academic conference, call for papers, paper submission, global research, scientific advancements, interdisciplinary studies, conference 2025" />
      <meta name="description" content="The International Conference on Multidisciplinary Research in Science and Technology (ICMRST) 2025 unites researchers, innovators, and professionals to share knowledge, foster collaborations, and explore advancements across diverse scientific and technological fields." />
      <meta name="author" content="ICMRST Editorial Team" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="International Conference on Multidisciplinary Research in Science and Technology" />
      <meta property="og:description" content="The International Conference on Multidisciplinary Research in Science and Technology (ICMRST) 2025 unites researchers, innovators, and professionals to share knowledge, foster collaborations, and explore advancements across diverse scientific and technological fields." />
      <meta property="og:url" content="https://icmrst.org/" />
      <meta property="og:image" content="https://icmrst.org/images/ICMRST logo.png" />

      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/png" href="https://icmrst.org/images/ICMRST logo.png" />

    </Helmet>
  )
}

export default HelmetComponent