import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ApplicationLayout } from './components/ApplicationLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ApplicationLayout />,
    children: [
      {
        index: true,
        element: <div>Home</div>
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
