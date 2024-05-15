import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthContext } from "./authContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> },
      ],
    },
  ]);
  return (
    <>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </>
  );
}

export default App;
