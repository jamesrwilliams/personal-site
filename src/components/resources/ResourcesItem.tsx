import React from 'react';
import { Link } from '../';

export interface ResourceItemProps {
  link: string;
  description: string;
  linkText: string;
}

export const ResourceItem = ({ link, description, linkText }: ResourceItemProps) => (
  <li key={link} style={{ marginBottom: '.5rem' }}>
    <Link to={link}>{ linkText || link }</Link>
    { description ? <><span> - </span>{ description }</> : ''}
  </li>
);
