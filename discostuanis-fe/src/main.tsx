import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App'
import Error from './Error'
import Artistas from "./Artistas";
import Epk from "./Epk";

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
    },
    {
        path: "artistas",
        element: <Artistas />,
    },
    {
        path: "artista/:contactId",
        element: <Artistas />,
    },
    {
        path: "epk/buen-camino",
        element: <Epk />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
      <RouterProvider router={router} />
  </>,
)
