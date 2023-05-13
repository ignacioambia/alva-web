// import { useState } from 'react'
import { AlvaInput } from './components/AlvaInput/AlvaInput'
import { Icon } from '@iconify/react';
import './App.scss';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <AlvaInput icon={<Icon icon="material-symbols:phone-enabled-sharp"/>}/>
    </>
  )
}

export default App
