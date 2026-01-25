import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DictionaryPage, IndexPage, VocabularyListPage } from './pages';
import { AppLayout } from './AppLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      {
        path: 'vocabulary-list',
        element: <VocabularyListPage />,
      },
      {
        path: 'dictionary',
        element: <DictionaryPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);
