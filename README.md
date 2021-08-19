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
  return <Breadcrumbs useDefaultStyle rootLabel="Home" />;
};
```

## Pass custom list of characters that should be replaced in each label

By default the breadcrumb labels are generated through the url path. In many cases you might want to transform certain special characters from the path. One example would be transforming all the '.' into ' '. You can pass an array here with your preferred transformation list and the component will take care of that for you.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

// Before: title.to.be.transformed  After: title to be transformed
const Example = () => {
  return (
    <Breadcrumbs
      useDefaultStyle={true}
      replaceCharacterList={[{ from: '.', to: ' ' }]}
    />
  );
};
```

## Custom label transformation

It's possible to pass a label transformation function to customize the labels.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

const Example = () => {
  return (
    <Breadcrumbs
      useDefaultStyle
      transformLabel={(title) => title + ' Custom Label'}
    />
  );
};
```

## Omit the root / home label

It's possible to omit the root level entirely. This makes sense if you have an URL like https://website.com/home. If you wouldn't omit the root label in this case, the Breadcrumbs would show something like `/home/home`.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

const Example = () => {
  return <Breadcrumbs omitRootLabel />;
};
```

## Omit certain path indexes from breadcrumb navigation

It's possible to pass an array containing all the indexes of the path that should be omitted and not be rendered as labels. If we have a path like `/home/category/1` then you might want to pass `[2]` here, which omits the breadcrumb label `1`. Indexes start with 0. Example: `[2]` Default: `undefined`.

```tsx
import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

// path: /nested/this-is-ommited will omit the this-is-ommited breadcrumb
const Example = () => {
  return <Breadcrumbs useDefaultStyle={true} omitIndexList={[1]} />;
};
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

• **breadcrumb**: _string_

Breadcrumb title. Example: 'blog-entries'

Defined in: [index.tsx:35](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L35)

---

#### href

• **href**: _string_

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
- [omitRootLabel](#omitRootlabel)
- [transformLabel](#transformlabel)
- [useDefaultStyle](#usedefaultstyle)

### Properties

#### activeItemClassName

• `Optional` **activeItemClassName**: _string_

Classes to be used for the active breadcrumb list item

Defined in: [index.tsx:78](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L78)

---

#### activeItemStyle

• `Optional` **activeItemStyle**: _any_

An inline style object for the active breadcrumb list item

Defined in: [index.tsx:75](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L75)

---

#### containerClassName

• `Optional` **containerClassName**: _string_

Classes to be used for the outer container. Won't be used if useDefaultStyle is true

Defined in: [index.tsx:60](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L60)

---

#### containerStyle

• `Optional` **containerStyle**: _any_

An inline style object for the outer container

Defined in: [index.tsx:57](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L57)

---

#### inactiveItemClassName

• `Optional` **inactiveItemClassName**: _string_

Classes to be used for the inactive breadcrumb list item

Defined in: [index.tsx:72](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L72)

---

#### inactiveItemStyle

• `Optional` **inactiveItemStyle**: _any_

An inline style object for the inactive breadcrumb list item

Defined in: [index.tsx:69](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L69)

---

#### labelsToUppercase

• `Optional` **labelsToUppercase**: _boolean_

Boolean indicator if the labels should be displayed as uppercase. Example: true Default: false

Defined in: [index.tsx:51](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L51)

---

#### listClassName

• `Optional` **listClassName**: _string_

Classes to be used for the breadcrumb list

Defined in: [index.tsx:66](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L66)

---

#### listStyle

• `Optional` **listStyle**: _any_

An inline style object for the breadcrumb list

Defined in: [index.tsx:63](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L63)

---

#### rootLabel

• `Optional` **rootLabel**: `null` \| _string_

The title for the very first breadcrumb pointing to the root directory. Example: '/' Default: 'HOME'

Defined in: [index.tsx:48](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L48)

---

#### omitRootLabel

• `Optional` **omitRootLabel**: _boolean_

Boolean indicator whether the root label should be ommitted. Example: true Default: false

Defined in: [index.tsx:48](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L48)

---

#### transformLabel

• `Optional` **transformLabel**: (`title`: _string_) => _string_

A transformation function that allows to customize the label strings. Receives the label string and has to return a string

##### Type declaration

▸ (`title`: _string_): _string_

##### Parameters

| Name    | Type     |
| :------ | :------- |
| `title` | _string_ |

**Returns:** _string_

Defined in: [index.tsx:54](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L54)

---

#### useDefaultStyle

• `Optional` **useDefaultStyle**: _boolean_

If true, the default styles are used.
Make sure to import the CSS in \_app.js
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

• `Const` **default**: (`__namedParameters`: [_BreadcrumbsProps_](#interfacesbreadcrumbspropsmd)) => `null` \| _Element_

A functional React component for Next.js that renders a dynamic Breadcrumb navigation
based on the current path within the Next.js router navigation.

Only works in conjunction with Next.js, since it leverages the Next.js router.

By setting useDefaultStyle to true, the default CSS will be used.
The component is highly customizable by either custom classes or
inline styles, which can be passed as props.

**`param`** object of type BreadcrumbsProps

**`returns`** The breadcrumb React component.

#### Type declaration

▸ (`__namedParameters`: [_BreadcrumbsProps_](#interfacesbreadcrumbspropsmd)): `null` \| _Element_

A functional React component for Next.js that renders a dynamic Breadcrumb navigation
based on the current path within the Next.js router navigation.

Only works in conjunction with Next.js, since it leverages the Next.js router.

By setting useDefaultStyle to true, the default CSS will be used.
The component is highly customizable by either custom classes or
inline styles, which can be passed as props.

#### Parameters

| Name                | Type                                                |
| :------------------ | :-------------------------------------------------- |
| `__namedParameters` | [_BreadcrumbsProps_](#interfacesbreadcrumbspropsmd) |

**Returns:** `null` \| _Element_

The breadcrumb React component.

| Name           | Type                                                |
| :------------- | :-------------------------------------------------- |
| `defaultProps` | [_BreadcrumbsProps_](#interfacesbreadcrumbspropsmd) |

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

• **defaultProps**: [_BreadcrumbsProps_](#interfacesbreadcrumbspropsmd)
