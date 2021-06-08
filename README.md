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

## Custom styling (CSS)

It's possible, to style each HTML element of this component separetely. This can be done either via inline styles or by assigning your own classes.

Check out the API documentation for further info on which styles you can provide.

# API Documentation

## Table of contents

### Namespaces

- [default](#modulesdefaultmd)

### Variables

- [default](#default)

## Variables

### default

• `Const` **default**: (`__namedParameters`: BreadcrumbsProps) => ``null`` \| *Element*

A functional React component for Next.js that renders a dynamic Breadcrumb navigation
based on the current path within the Next.js router navigation.

Only works in conjunction with Next.js, since it leverages the Next.js router.

By setting useDefaultStyle to true, the default CSS will be used.
The component is highly customizable by either custom classes or
inline styles, which can be passed as props.

**`param`** object of type BreadcrumbsProps

**`returns`** The breadcrumb React component.

#### Type declaration

▸ (`__namedParameters`: BreadcrumbsProps): ``null`` \| *Element*

A functional React component for Next.js that renders a dynamic Breadcrumb navigation
based on the current path within the Next.js router navigation.

Only works in conjunction with Next.js, since it leverages the Next.js router.

By setting useDefaultStyle to true, the default CSS will be used.
The component is highly customizable by either custom classes or
inline styles, which can be passed as props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | BreadcrumbsProps |

**Returns:** ``null`` \| *Element*

The breadcrumb React component.

| Name | Type |
| :------ | :------ |
| `defaultProps` | BreadcrumbsProps |

Defined in: [index.tsx:94](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/7895ee0/src/index.tsx#L94)

# Modules


<a name="modulesdefaultmd"></a>

[nextjs-breadcrumbs](#readmemd) / [Exports](#modulesmd) / default

## Namespace: default

### Table of contents

#### Variables

- [defaultProps](#defaultprops)

### Variables

#### defaultProps

• **defaultProps**: BreadcrumbsProps


## License

MIT © [NiklasMencke](https://github.com/NiklasMencke)
