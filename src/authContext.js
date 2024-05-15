import { createContext, useContext, useEffect, useState } from "react";
import { db } from "./firebaseInit";
import { collection, addDoc, onSnapshot, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const authContext = createContext();
const navigate = useNavigate
export function useAuthValue(){
    const value = useContext(authContext);
    return value
}

export function AuthContext({ children }) {
  const [isLoggIn, setLoggIn] = useState(false);

  // who is logged in
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  // List of Users in database
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      const users = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setUserList(users);

    });
  },[isLoggIn]);

  // Create New User
  async function singUp(data) {
    const index = userList.findIndex((user) => user.email === data.email);

    if (index !== -1) {
      toast.error("Email address already exist, Try again or SignIn Instead");
      return;
    }

    const docRef = await addDoc(collection(db, "users"), {
      name: data.name,
      email: data.email,
      password: data.password,
      cart: [],
      orders: [],
    });
    toast.success("New user Created, Please Login to Continue");
  }

  async function signIn(data) {
    const index = userList.findIndex((user) => user.email === data.email);

    if (index === -1) {
      toast.error("Email address not exist, Try again or SignUp Instead");
      return;
    }

    if (userList[index].password === data.password) {
      toast.success("SignIn Successfully");
      setLoggIn(true);
      setUserLoggedIn(userList[index]);

      window.localStorage.setItem("token", true);
      window.localStorage.setItem("index", JSON.stringify(userList));
    } else {
      toast.error("Wrong Passward, try again");
      return false;
    }
  }

  async function signOut() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("index");
    setLoggIn(false);
    setUserLoggedIn(null);
    toast.success("sign out successfully");
    // navigate("/signin")
  }

  return (
    <>
      <authContext.Provider
        value={{
          singUp,
          signIn,
          signOut,
          isLoggIn,
          setLoggIn,
          setUserLoggedIn,
        }}
      >
        <ToastContainer />
        {children}
      </authContext.Provider>
    </>
  );
}
