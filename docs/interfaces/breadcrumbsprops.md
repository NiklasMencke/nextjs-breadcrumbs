[nextjs-breadcrumbs](../README.md) / [Exports](../modules.md) / BreadcrumbsProps

# Interface: BreadcrumbsProps

## Table of contents

### Properties

- [activeItemClassName](breadcrumbsprops.md#activeitemclassname)
- [activeItemStyle](breadcrumbsprops.md#activeitemstyle)
- [containerClassName](breadcrumbsprops.md#containerclassname)
- [containerStyle](breadcrumbsprops.md#containerstyle)
- [inactiveItemClassName](breadcrumbsprops.md#inactiveitemclassname)
- [inactiveItemStyle](breadcrumbsprops.md#inactiveitemstyle)
- [labelsToUppercase](breadcrumbsprops.md#labelstouppercase)
- [listClassName](breadcrumbsprops.md#listclassname)
- [listStyle](breadcrumbsprops.md#liststyle)
- [rootLabel](breadcrumbsprops.md#rootlabel)
- [transformLabel](breadcrumbsprops.md#transformlabel)
- [useDefaultStyle](breadcrumbsprops.md#usedefaultstyle)

## Properties

### activeItemClassName

• `Optional` **activeItemClassName**: *string*

Classes to be used for the active breadcrumb list item

Defined in: [index.tsx:78](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L78)

___

### activeItemStyle

• `Optional` **activeItemStyle**: *any*

An inline style object for the active breadcrumb list item

Defined in: [index.tsx:75](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L75)

___

### containerClassName

• `Optional` **containerClassName**: *string*

Classes to be used for the outer container. Won't be used if useDefaultStyle is true

Defined in: [index.tsx:60](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L60)

___

### containerStyle

• `Optional` **containerStyle**: *any*

An inline style object for the outer container

Defined in: [index.tsx:57](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L57)

___

### inactiveItemClassName

• `Optional` **inactiveItemClassName**: *string*

Classes to be used for the inactive breadcrumb list item

Defined in: [index.tsx:72](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L72)

___

### inactiveItemStyle

• `Optional` **inactiveItemStyle**: *any*

An inline style object for the inactive breadcrumb list item

Defined in: [index.tsx:69](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L69)

___

### labelsToUppercase

• `Optional` **labelsToUppercase**: *boolean*

Boolean indicator if the labels should be displayed as uppercase. Example: true Default: false

Defined in: [index.tsx:51](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L51)

___

### listClassName

• `Optional` **listClassName**: *string*

Classes to be used for the breadcrumb list

Defined in: [index.tsx:66](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L66)

___

### listStyle

• `Optional` **listStyle**: *any*

An inline style object for the breadcrumb list

Defined in: [index.tsx:63](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L63)

___

### rootLabel

• `Optional` **rootLabel**: ``null`` \| *string*

The title for the very first breadcrumb pointing to the root directory. Example: '/' Default: 'HOME'

Defined in: [index.tsx:48](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L48)

___

### transformLabel

• `Optional` **transformLabel**: (`title`: *string*) => *string*

A transformation function that allows to customize the label strings. Receives the label string and has to return a string

#### Type declaration

▸ (`title`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | *string* |

**Returns:** *string*

Defined in: [index.tsx:54](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L54)

___

### useDefaultStyle

• `Optional` **useDefaultStyle**: *boolean*

If true, the default styles are used.
Make sure to import the CSS in _app.js
Example: true Default: false

Defined in: [index.tsx:45](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L45)
