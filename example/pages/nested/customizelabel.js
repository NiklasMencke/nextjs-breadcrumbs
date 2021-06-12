import React from 'react'

import Breadcrumbs from '../../../dist/index.modern'

// Customize label name
const customMapper = {
  nested: 'Labels',
  customizelabel: 'Changed.'
}

const App = () => {
  return <Breadcrumbs useDefaultStyle={true} labelMapper={customMapper} />
}

export default App
