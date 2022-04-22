import React from 'react'
import { useParams } from 'react-router-dom';
import './cssclass.css'

import CssStart from './cssFundamentals/C01_Start';

const CssClass = () => {
  return (
    <>
      <section id='cssLesson'>
        {useParams().id==='1' && <CssStart />}
      </section>
    </>
  )
}

export default CssClass