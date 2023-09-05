import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import './styles/App.css';

function App() {
  return (
    <RouterProvider router={createBrowserRouter(router)} />
  );
}

export default App;
