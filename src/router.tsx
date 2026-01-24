import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import { IndexPage, VocabularyListPage } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      { index: true, element: <IndexPage /> },
      {
        path: 'vocabulary-list',
        element: <VocabularyListPage />,
      },
      // {
      //   path: 'user-drafts',
      //   element: <UserDraftsPage />,
      // }, // /user-drafts
    ],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);
