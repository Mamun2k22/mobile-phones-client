
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='mx-20 my-8' >
      <RouterProvider router={router}>
      </RouterProvider>

    </div>
  );
}

export default App;
