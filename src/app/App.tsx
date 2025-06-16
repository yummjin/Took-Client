import { RAW_PATH } from '@/shared/constants';
import { Stack } from './stackflow';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    {
      path: RAW_PATH.HOME,
      element: (
        <div className="size-screen">
          <div className="scrollbar-hide container-mobile fixed inset-0 overflow-hidden">
            <Stack />
          </div>
        </div>
      ),
    },
    { path: RAW_PATH.AUTH, element: <></> },
    { path: RAW_PATH.SIGNUP, element: <></> },
  ]);

  return <RouterProvider router={router} />;
}
