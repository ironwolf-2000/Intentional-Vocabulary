import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { createGlobalStyle } from 'styled-components';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      sans-serif;
    line-height: 1.4;
    background-color: #fff;
    color: #000;
  }

  button {
    font: inherit;
    background: none;
  }
`;

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <RouterProvider router={router} />
    <GlobalStyle />
  </MantineProvider>,
);
