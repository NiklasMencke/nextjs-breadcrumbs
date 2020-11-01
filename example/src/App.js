import React from 'react'
import { Breadcrumbs } from 'nextjs-breadcrumbs'

const App = () => {
  const example = Breadcrumbs()
  return (
    <div>
      {example}
    </div>
  )
}
export default App