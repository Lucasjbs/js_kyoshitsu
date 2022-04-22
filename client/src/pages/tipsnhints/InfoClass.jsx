import React from 'react'
import { useParams } from 'react-router-dom';

import JInfo01 from './JInfo01';

const InfoClass = () => {
  return (
    <>
      <section id='tipsnhintsInfo'>
        {useParams().id==='1' && <JInfo01 />}
        {useParams().id==='2' && <JInfo01 />}
        {useParams().id==='3' && <JInfo01 />}
      </section>
    </>
  )
}

export default InfoClass