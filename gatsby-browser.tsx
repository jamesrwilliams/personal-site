import React  from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

require('prismjs/plugins/line-numbers/prism-line-numbers.css');
require('prismjs/plugins/command-line/prism-command-line.css');

export const wrapRootElement = ({ element }: any) => (
  <ThemeProvider>{element}</ThemeProvider>
);
