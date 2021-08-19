/** @format */

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './styles.css';

/**
 * Takes an URL String and removes query params and hash params
 *
 * @param url - The URL string
 * @returns The transformed URL string
 *
 */
const getPathFromUrl = (url: string): string => {
  return url.split(/[?#]/)[0];
};

/**
 * Takes a breadcrumb title (from url path) and replaces
 * special chars to more readable chars
 *
 * @param title - The breadcrumb title
 * @returns The transformed title or the result of the custom transformLabel function
 *
 */
const convertBreadcrumb = (
  title: string,
  toUpperCase: boolean | undefined,
  transformLabel?: ((title: string) => React.ReactNode) | undefined
): React.ReactNode => {
  let transformedTitle = getPathFromUrl(title);
  transformedTitle = transformedTitle
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .replace(/\?.*/, '');
  if (transformLabel) {
    return transformLabel(transformedTitle);
  }
  return toUpperCase ? transformedTitle.toUpperCase() : transformedTitle;
};

export interface Breadcrumb {
  /** Breadcrumb title. Example: 'blog-entries' */
  breadcrumb: string;

  /** The URL which the breadcrumb points to. Example: 'blog/blog-entries' */
  href: string;
}

export interface BreadcrumbsProps {
  /** If true, the default styles are used.
   * Make sure to import the CSS in _app.js
   * Example: true Default: false */
  useDefaultStyle?: boolean;

  /** The title for the very first breadcrumb pointing to the root directory. Example: '/' Default: 'HOME' */
  rootLabel?: string | null;

  /** Boolean indicator whether the root label should be ommitted. Example: true Default: false */
  omitRootLabel?: boolean;

  /** Boolean indicator if the labels should be displayed as uppercase. Example: true Default: false */
  labelsToUppercase?: boolean | undefined;

  /** A transformation function that allows to customize the label strings. Receives the label string and has to return a string or React Component */
  transformLabel?: ((title: string) => React.ReactNode) | undefined;

  /** An inline style object for the outer container */
  containerStyle?: any | null;

  /** Classes to be used for the outer container. Won't be used if useDefaultStyle is true */
  containerClassName?: string;

  /** An inline style object for the breadcrumb list */
  listStyle?: any | null;

  /** Classes to be used for the breadcrumb list */
  listClassName?: string;

  /** An inline style object for the inactive breadcrumb list item */
  inactiveItemStyle?: any | null;

  /** Classes to be used for the inactive breadcrumb list item */
  inactiveItemClassName?: string;

  /** An inline style object for the active breadcrumb list item */
  activeItemStyle?: any | null;

  /** Classes to be used for the active breadcrumb list item */
  activeItemClassName?: string;
}

const defaultProps: BreadcrumbsProps = {
  useDefaultStyle: false,
  rootLabel: 'Home',
  omitRootLabel: false,
  labelsToUppercase: false,
  transformLabel: undefined,
  containerStyle: null,
  containerClassName: '',
  listStyle: null,
  listClassName: '',
  inactiveItemStyle: null,
  inactiveItemClassName: '',
  activeItemStyle: null,
  activeItemClassName: '',
};

/**
 * A functional React component for Next.js that renders a dynamic Breadcrumb navigation
 * based on the current path within the Next.js router navigation.
 *
 * Only works in conjunction with Next.js, since it leverages the Next.js router.
 *
 * By setting useDefaultStyle to true, the default CSS will be used.
 * The component is highly customizable by either custom classes or
 * inline styles, which can be passed as props.
 *
 * @param props - object of type BreadcrumbsProps
 * @returns The breadcrumb React component.
 */
const Breadcrumbs = ({
  useDefaultStyle,
  rootLabel,
  omitRootLabel,
  labelsToUppercase,
  transformLabel,
  containerStyle,
  containerClassName,
  listStyle,
  listClassName,
  inactiveItemStyle,
  inactiveItemClassName,
  activeItemStyle,
  activeItemClassName,
}: BreadcrumbsProps) => {
  const router = useRouter();
  const breadcrumbs = useMemo(() => {
    if (!router) return null;

    const linkPath = router.asPath.split('/');
    linkPath.shift();

    return linkPath.map<Breadcrumb>((path, i) => ({
      breadcrumb: path,
      href: '/' + linkPath.slice(0, i + 1).join('/'),
    }));
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      style={containerStyle}
      className={containerClassName}
      aria-label="breadcrumbs"
    >
      <ol
        style={listStyle}
        className={useDefaultStyle ? '_2jvtI' : listClassName}
      >
        {!omitRootLabel && (
          <li style={inactiveItemStyle} className={inactiveItemClassName}>
            <Link href="/">
              <a>
                {convertBreadcrumb(
                  rootLabel || 'Home',
                  labelsToUppercase,
                  transformLabel
                )}
              </a>
            </Link>
          </li>
        )}
        {breadcrumbs.length >= 1 &&
          breadcrumbs.map((breadcrumb, i) => {
            if (!breadcrumb || breadcrumb.breadcrumb.length === 0) {
              return;
            }
            return (
              <li
                key={breadcrumb.href}
                className={
                  i === breadcrumbs.length - 1
                    ? activeItemClassName
                    : inactiveItemClassName
                }
                style={
                  i === breadcrumbs.length - 1
                    ? activeItemStyle
                    : inactiveItemStyle
                }
              >
                <Link href={breadcrumb.href}>
                  <a>
                    {convertBreadcrumb(
                      breadcrumb.breadcrumb,
                      labelsToUppercase,
                      transformLabel
                    )}
                  </a>
                </Link>
              </li>
            );
          })}
      </ol>
    </nav>
  );
};

Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;
