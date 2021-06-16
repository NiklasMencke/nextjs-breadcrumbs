import React from 'react'

import Breadcrumbs from 'nextjs-breadcrumbs'

const App = () => {
  return (
    <Breadcrumbs
      useDefaultStyle={true}
      transformLabel={(title) => title + ' Custom Label'}
    />
  )
}

export default App
