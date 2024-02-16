// import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//Routes
import About from "./About";
import Error from './pages/Error';
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Main, { mainLoader } from "./layouts/Main";
import { logoutAction } from './actions/logout';

//toast message
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  // { 
  //   path: "/",
  //   element: <Dashboard />,
  //   loader: dashboardLoader,
  // },
  { 
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      { 
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction
      },
    ]
  },
  {
    path: "/about",
    element: <About />,
  },
  // {
  //   path: "*",
  //   element:  <Error />,
  // },
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>
        <ToastContainer />
    </div>
  );
}

export default App;
