import React from 'react';

import Breadcrumbs from 'nextjs-breadcrumbs';

const App = () => {
  return (
    <Breadcrumbs
      useDefaultStyle={true}
      replaceCharacterList={[{ from: '.', to: ' ' }]}
    />
  );
};

export default App;
