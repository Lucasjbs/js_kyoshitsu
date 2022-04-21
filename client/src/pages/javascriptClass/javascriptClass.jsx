import React from 'react'
import { useParams } from 'react-router-dom';

import Start from './J01_Start';
import Basics from './J02_Basics';
import Arrays from './J03_Arrays';
import Loops from './J04_Loops';
import References from './J05_References';
import Callbacks from './J06_Callbacks';
import Math from './J07_Math';
import DOM from './J08_DOM';

const JavascriptClass = () => {
  return (
    <>
      {useParams().id==='1' && <Start />}
      {useParams().id==='2' && <Basics />}
      {useParams().id==='3' && <Arrays />}
      {useParams().id==='4' && <Loops />}
      {useParams().id==='5' && <References />}
      {useParams().id==='6' && <Callbacks />}
      {useParams().id==='7' && <Math />}
      {useParams().id==='8' && <DOM />}
    </>
  )
}

export default JavascriptClass