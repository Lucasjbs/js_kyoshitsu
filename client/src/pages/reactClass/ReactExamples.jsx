import React from 'react'
import { useParams } from 'react-router-dom';

import BasicsEx1 from './reactExamples/R02_example1';
import JSXEx1 from './reactExamples/R03_example1';
import JSXEx2 from './reactExamples/R03_example2';
import JSXEx3 from './reactExamples/R03_example3';
import JSXEx4 from './reactExamples/R03_example4';
import JSXEx5 from './reactExamples/R03_example5';
import HooksEx1 from './reactExamples/R04_example1';
import HooksEx2 from './reactExamples/R04_example2';
import HooksEx3 from './reactExamples/R04_example3';
import HooksEx4 from './reactExamples/R04_example4';
import HooksEx5 from './reactExamples/R04_example5';
import EffectEx1 from './reactExamples/R05_example1';
import EffectEx2 from './reactExamples/R05_example2';
import EffectEx3 from './reactExamples/R05_example3';
import ConditionalEx1 from './reactExamples/R06_example1';
import ConditionalEx2 from './reactExamples/R06_example2';
import ConditionalEx3 from './reactExamples/R06_example3';
import InputsEx1 from './reactExamples/R07_example1';
import InputsEx2 from './reactExamples/R07_example2';
import ReferenceEx1 from './reactExamples/R08_example1';

const ReactExamples = () => {
  return (
    <>
      {useParams().id==='1' && <BasicsEx1 />}
      {useParams().id==='2' && <JSXEx1 />}
      {useParams().id==='3' && <JSXEx2 />}
      {useParams().id==='4' && <JSXEx3 />}
      {useParams().id==='5' && <JSXEx4 />}
      {useParams().id==='6' && <JSXEx5 />}
      {useParams().id==='7' && <HooksEx1 />}
      {useParams().id==='8' && <HooksEx2 />}
      {useParams().id==='9' && <HooksEx3 />}
      {useParams().id==='10' && <HooksEx4 />}
      {useParams().id==='11' && <HooksEx5 />}
      {useParams().id==='12' && <EffectEx1 />}
      {useParams().id==='13' && <EffectEx2 />}
      {useParams().id==='14' && <EffectEx3 />}
      {useParams().id==='15' && <ConditionalEx1 />}
      {useParams().id==='16' && <ConditionalEx2 />}
      {useParams().id==='17' && <ConditionalEx3 />}
      {useParams().id==='18' && <InputsEx1 />}
      {useParams().id==='19' && <InputsEx2 />}
      {useParams().id==='20' && <ReferenceEx1 />}
    </>
  )
}

export default ReactExamples