import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ApplicationLayout } from './components/ApplicationLayout'
import { HomePage } from './features/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ApplicationLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
