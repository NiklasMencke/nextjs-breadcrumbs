/** @format */

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './styles.css';

/**
 * Takes a breadcrumb title (from url path) and replaces
 * special chars to more readable chars
 *
 * @param title - The breadcrumb title
 * @returns The transformed title
 *
 */
const convertBreadcrumb = (
  title: string,
  upperLabel: boolean | undefined,
  customMapper: LabelMapDictionary | null | undefined,
): string => {
  if (!!customMapper && customMapper[title]) {
    title = customMapper[title];
  }
  title = title
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .replace(/\?.*/, '');
  if (upperLabel) {
    title = title.toUpperCase();
  }
  return title;
};

interface Breadcrumb {
  /** Breadcrumb title. Example: 'blog-entries' */
  breadcrumb: string;

  /** The URL which the breadcrumb points to. Example: 'blog/blog-entries' */
  href: string;
}

interface LabelMapDictionary {
  [beforeConvert: string]: string;
}

interface BreadcrumbsProps {
  /** If true, the default styles are used.
   * Make sure to import the CSS in _app.js
   * Example: true Default: false */
  useDefaultStyle?: boolean;

  /** The title for the very first breadcrumb pointing to the root directory. Example: '/' Default: 'HOME' */
  rootLabel?: string | null;

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

  /** Mapper for customizing the labels that appear in the breadcrumbs */
  labelMapper?: LabelMapDictionary | null;

  /** If true, the label will be displayed on the upper case */
  upperLabel?: boolean;
}

const defaultProps: BreadcrumbsProps = {
  useDefaultStyle: false,
  rootLabel: 'HOME',
  containerStyle: null,
  containerClassName: '',
  listStyle: null,
  listClassName: '',
  inactiveItemStyle: null,
  inactiveItemClassName: '',
  activeItemStyle: null,
  activeItemClassName: '',
  labelMapper: null,
  upperLabel: true,
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
  containerStyle,
  containerClassName,
  listStyle,
  listClassName,
  inactiveItemStyle,
  inactiveItemClassName,
  activeItemStyle,
  activeItemClassName,
  labelMapper,
  upperLabel,
}: BreadcrumbsProps) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb> | null>(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav style={containerStyle} className={containerClassName} aria-label='breadcrumbs'>
      <ol style={listStyle} className={useDefaultStyle ? '_2jvtI' : listClassName}>
        <li style={inactiveItemStyle} className={inactiveItemClassName}>
          <Link href='/'>
            <a>{rootLabel || 'HOME'}</a>
          </Link>
        </li>
        {breadcrumbs.length >= 1 &&
          breadcrumbs.map((breadcrumb, i) => {
            if (!breadcrumb || breadcrumb.breadcrumb.length === 0) {
              return;
            }
            return (
              <li
                key={breadcrumb.href}
                className={
                  i === breadcrumbs.length - 1 ? activeItemClassName : inactiveItemClassName
                }
                style={i === breadcrumbs.length - 1 ? activeItemStyle : inactiveItemStyle}>
                <Link href={breadcrumb.href}>
                  <a>{convertBreadcrumb(breadcrumb.breadcrumb, upperLabel, labelMapper)}</a>
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
