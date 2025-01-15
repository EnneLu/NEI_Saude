import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from "./routes/Home.jsx";
import Enfermeiro from "./routes/Enfermeiro.jsx";
import Psicologo from './routes/Psicologo.jsx';
import Professor from './routes/Professor.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "enfermeiro",
        element: <Enfermeiro/>,
      },
      {
        path: "psicologo",
        element: <Psicologo/>,
      },
      {
        path: "professor",
        element: <Professor/>,
      },
  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
