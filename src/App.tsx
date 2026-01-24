import { type FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { IndexPage } from './pages';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [{ path: '/', element: <IndexPage /> }],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);

export const App: FC = () => (
  <MantineProvider>
    <RouterProvider router={router} />
    <GlobalStyle />
  </MantineProvider>
);

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
