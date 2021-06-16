nextjs-breadcrumbs / [Exports](modules.md)

# nextjs-breadcrumbs

> A dynamic, highly customizable breadcrumbs component for Next.js

[![NPM](https://img.shields.io/npm/v/nextjs-breadcrumbs.svg)](https://www.npmjs.com/package/nextjs-breadcrumbs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
yarn add nextjs-breadcrumbs
```

## Prerequisites

This component is highly customizable. You can provide your own CSS via classes or via inline styles.
If you want to use the default styling however, you need to make sure to import the CSS file provided by this package.
Inside your `_app.js` paste `import 'nextjs-breadcrumbs/dist/index.css';` at the top. This is not needed, if you just want to use your custom styles.

## Usage

The component needs to be used within Next.js and won't work in plain React.
It will always display a dynamic Breadcrumb navigation, based on the current path of the Next router.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

const Example = () => {
  return <Breadcrumbs useDefaultStyle rootLabel="Home" />
}
```

## Custom label transformation

It's possible to pass a label transformation function to customize the labels.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

const Example = () => {
  return <Breadcrumbs useDefaultStyle transformLabel={(title) => title + ' Custom Label'} />
}
```

## Custom styling (CSS)

It's possible, to style each HTML element of this component separetely. This can be done either via inline styles or by assigning your own classes.

## License

MIT © [NiklasMencke](https://github.com/NiklasMencke)
