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

# Interfaces


<a name="interfacesbreadcrumbmd"></a>

[nextjs-breadcrumbs](#readmemd) / [Exports](#modulesmd) / Breadcrumb

## Interface: Breadcrumb

### Table of contents

#### Properties

- [breadcrumb](#breadcrumb)
- [href](#href)

### Properties

#### breadcrumb

• **breadcrumb**: *string*

Breadcrumb title. Example: 'blog-entries'

Defined in: [index.tsx:35](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L35)

___

#### href

• **href**: *string*

The URL which the breadcrumb points to. Example: 'blog/blog-entries'

Defined in: [index.tsx:38](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L38)


<a name="interfacesbreadcrumbspropsmd"></a>

[nextjs-breadcrumbs](#readmemd) / [Exports](#modulesmd) / BreadcrumbsProps

## Interface: BreadcrumbsProps

### Table of contents

#### Properties

- [activeItemClassName](#activeitemclassname)
- [activeItemStyle](#activeitemstyle)
- [containerClassName](#containerclassname)
- [containerStyle](#containerstyle)
- [inactiveItemClassName](#inactiveitemclassname)
- [inactiveItemStyle](#inactiveitemstyle)
- [labelsToUppercase](#labelstouppercase)
- [listClassName](#listclassname)
- [listStyle](#liststyle)
- [rootLabel](#rootlabel)
- [transformLabel](#transformlabel)
- [useDefaultStyle](#usedefaultstyle)

### Properties

#### activeItemClassName

• `Optional` **activeItemClassName**: *string*

Classes to be used for the active breadcrumb list item

Defined in: [index.tsx:78](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L78)

___

#### activeItemStyle

• `Optional` **activeItemStyle**: *any*

An inline style object for the active breadcrumb list item

Defined in: [index.tsx:75](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L75)

___

#### containerClassName

• `Optional` **containerClassName**: *string*

Classes to be used for the outer container. Won't be used if useDefaultStyle is true

Defined in: [index.tsx:60](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L60)

___

#### containerStyle

• `Optional` **containerStyle**: *any*

An inline style object for the outer container

Defined in: [index.tsx:57](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L57)

___

#### inactiveItemClassName

• `Optional` **inactiveItemClassName**: *string*

Classes to be used for the inactive breadcrumb list item

Defined in: [index.tsx:72](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L72)

___

#### inactiveItemStyle

• `Optional` **inactiveItemStyle**: *any*

An inline style object for the inactive breadcrumb list item

Defined in: [index.tsx:69](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L69)

___

#### labelsToUppercase

• `Optional` **labelsToUppercase**: *boolean*

Boolean indicator if the labels should be displayed as uppercase. Example: true Default: false

Defined in: [index.tsx:51](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L51)

___

#### listClassName

• `Optional` **listClassName**: *string*

Classes to be used for the breadcrumb list

Defined in: [index.tsx:66](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L66)

___

#### listStyle

• `Optional` **listStyle**: *any*

An inline style object for the breadcrumb list

Defined in: [index.tsx:63](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L63)

___

#### rootLabel

• `Optional` **rootLabel**: ``null`` \| *string*

The title for the very first breadcrumb pointing to the root directory. Example: '/' Default: 'HOME'

Defined in: [index.tsx:48](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L48)

___

#### transformLabel

• `Optional` **transformLabel**: (`title`: *string*) => *string*

A transformation function that allows to customize the label strings. Receives the label string and has to return a string

##### Type declaration

▸ (`title`: *string*): *string*

##### Parameters

| Name | Type |
| :------ | :------ |
| `title` | *string* |

**Returns:** *string*

Defined in: [index.tsx:54](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L54)

___

#### useDefaultStyle

• `Optional` **useDefaultStyle**: *boolean*

If true, the default styles are used.
Make sure to import the CSS in _app.js
Example: true Default: false

Defined in: [index.tsx:45](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L45)


<a name="modulesmd"></a>

[nextjs-breadcrumbs](#readmemd) / Exports

# nextjs-breadcrumbs

## Table of contents

### Namespaces

- [default](#modulesdefaultmd)

### Interfaces

- [Breadcrumb](#interfacesbreadcrumbmd)
- [BreadcrumbsProps](#interfacesbreadcrumbspropsmd)

### Variables

- [default](#default)

## Variables

### default

• `Const` **default**: (`__namedParameters`: [*BreadcrumbsProps*](#interfacesbreadcrumbspropsmd)) => ``null`` \| *Element*

A functional React component for Next.js that renders a dynamic Breadcrumb navigation
based on the current path within the Next.js router navigation.

Only works in conjunction with Next.js, since it leverages the Next.js router.

By setting useDefaultStyle to true, the default CSS will be used.
The component is highly customizable by either custom classes or
inline styles, which can be passed as props.

**`param`** object of type BreadcrumbsProps

**`returns`** The breadcrumb React component.

#### Type declaration

▸ (`__namedParameters`: [*BreadcrumbsProps*](#interfacesbreadcrumbspropsmd)): ``null`` \| *Element*

A functional React component for Next.js that renders a dynamic Breadcrumb navigation
based on the current path within the Next.js router navigation.

Only works in conjunction with Next.js, since it leverages the Next.js router.

By setting useDefaultStyle to true, the default CSS will be used.
The component is highly customizable by either custom classes or
inline styles, which can be passed as props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [*BreadcrumbsProps*](#interfacesbreadcrumbspropsmd) |

**Returns:** ``null`` \| *Element*

The breadcrumb React component.

| Name | Type |
| :------ | :------ |
| `defaultProps` | [*BreadcrumbsProps*](#interfacesbreadcrumbspropsmd) |

Defined in: [index.tsx:109](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L109)

# Modules


<a name="modulesdefaultmd"></a>

[nextjs-breadcrumbs](#readmemd) / [Exports](#modulesmd) / default

## Namespace: default

### Table of contents

#### Variables

- [defaultProps](#defaultprops)

### Variables

#### defaultProps

• **defaultProps**: [*BreadcrumbsProps*](#interfacesbreadcrumbspropsmd)
