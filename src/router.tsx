import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ActiveReviewPage, DictionaryPage, IndexPage, PassiveReviewPage, VocabularyListPage } from './pages';
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
      {
        path: 'passive-review',
        element: <PassiveReviewPage />,
      },
      {
        path: 'active-review',
        element: <ActiveReviewPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);
