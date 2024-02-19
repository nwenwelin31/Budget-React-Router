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
import ExpensesPage, { expenseAction, expensesLoader } from './pages/ExpensesPage'

//toast message
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BudgetPage, { budgetAction, budgetLoader } from './pages/BudgetPage';
import deleteBudget from './actions/deleteBudget';

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
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          }
        ]
      },
      { 
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expenseAction,
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
