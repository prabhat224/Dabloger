import './App.css';
import AddNew from './pages/AddNew';
import Home from './pages/Home';
import Login from './pages/Login';
import ProfilePage from './pages/Profile';
import Signup from './pages/Signup';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPost from './pages/BlogPost';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/addnew",
    element: <AddNew></AddNew>,
  },
  {
    path: "/profile",
    element: <ProfilePage></ProfilePage>,
  },
  {
    path: "/blogpost",
    element: <BlogPost></BlogPost>,
  },
]);
function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
