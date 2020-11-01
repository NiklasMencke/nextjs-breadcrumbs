import React from 'react'
import { useMyHook } from 'nextjs-breadcrumbs'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App