/** @format */

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './styles.css';

const convertBreadcrumb = (string: string): string => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .replace(/\?.*/, '')
    .toUpperCase();
};

type Breadcrumb = { breadcrumb: string; href: string };

interface Props {
  useDefaultStyle?: boolean;
  rootLabel?: string | null;
  containerStyle?: any | null;
  containerClassName?: string;
  listStyle?: any | null;
  listClassName?: string;
  inactiveItemStyle?: any | null;
  inactiveItemClassName?: string;
  activeItemStyle?: any | null;
  activeItemClassName?: string;
}

const defaultProps: Props = {
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
};

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
}: Props) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb> | null>(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
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
        {breadcrumbs.length > 1 &&
          breadcrumbs.map((breadcrumb, i) => {
            return (
              <li
                key={breadcrumb.href}
                className={
                  i === breadcrumbs.length - 1 ? activeItemClassName : inactiveItemClassName
                }
                style={i === breadcrumbs.length - 1 ? activeItemStyle : inactiveItemStyle}>
                <Link href={breadcrumb.href}>
                  <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
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
