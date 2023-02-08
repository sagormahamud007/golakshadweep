import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './shere/Router';

function App() {
  return (
    <div style={{maxWidth:"1400px"}}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
