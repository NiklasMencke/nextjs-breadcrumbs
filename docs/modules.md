[nextjs-breadcrumbs](README.md) / Exports

# nextjs-breadcrumbs

## Table of contents

### Namespaces

- [default](modules/default.md)

### Interfaces

- [Breadcrumb](interfaces/breadcrumb.md)
- [BreadcrumbsProps](interfaces/breadcrumbsprops.md)

### Variables

- [default](modules.md#default)

## Variables

### default

• `Const` **default**: (`__namedParameters`: [*BreadcrumbsProps*](interfaces/breadcrumbsprops.md)) => ``null`` \| *Element*

A functional React component for Next.js that renders a dynamic Breadcrumb navigation
based on the current path within the Next.js router navigation.

Only works in conjunction with Next.js, since it leverages the Next.js router.

By setting useDefaultStyle to true, the default CSS will be used.
The component is highly customizable by either custom classes or
inline styles, which can be passed as props.

**`param`** object of type BreadcrumbsProps

**`returns`** The breadcrumb React component.

#### Type declaration

▸ (`__namedParameters`: [*BreadcrumbsProps*](interfaces/breadcrumbsprops.md)): ``null`` \| *Element*

A functional React component for Next.js that renders a dynamic Breadcrumb navigation
based on the current path within the Next.js router navigation.

Only works in conjunction with Next.js, since it leverages the Next.js router.

By setting useDefaultStyle to true, the default CSS will be used.
The component is highly customizable by either custom classes or
inline styles, which can be passed as props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [*BreadcrumbsProps*](interfaces/breadcrumbsprops.md) |

**Returns:** ``null`` \| *Element*

The breadcrumb React component.

| Name | Type |
| :------ | :------ |
| `defaultProps` | [*BreadcrumbsProps*](interfaces/breadcrumbsprops.md) |

Defined in: [index.tsx:109](https://github.com/NiklasMencke/nextjs-breadcrumbs/blob/40dc4f0/src/index.tsx#L109)
