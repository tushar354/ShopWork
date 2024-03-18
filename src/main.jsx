import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';
import Home from './Home/Home.jsx';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './Blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
import SingleProduct from './shop/SingleProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Blog",
        element: <Blog />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "shop/:id",
        element: <SingleProduct />
      }


    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
