import React from 'react'
import DarkVeil from './DarkVeil';


const Testhome = () => {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <DarkVeil
  hueShift={0}
  noiseIntensity={0}
  scanlineIntensity={0}
  speed={0.5}
  scanlineFrequency={0}
  warpAmount={0}
/>
</div>
  )
}

export default Testhome
