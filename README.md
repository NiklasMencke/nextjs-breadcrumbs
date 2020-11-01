# nextjs-breadcrumbs

> A dynamic breadcrumbs component for Next.js

[![NPM](https://img.shields.io/npm/v/nextjs-breadcrumbs.svg)](https://www.npmjs.com/package/nextjs-breadcrumbs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save nextjs-breadcrumbs
```

## Usage

```jsx
import React, { Component } from 'react'

import { Breadcrumbs } from 'nextjs-breadcrumbs'

const Example = () => {
  const example = Breadcrumbs()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [NiklasMencke](https://github.com/NiklasMencke)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
