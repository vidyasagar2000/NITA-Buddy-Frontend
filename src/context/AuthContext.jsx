import { createContext, useContext, useReducer, useState } from "react";

const AuthContext = createContext();

const initialState = {
  isAdmin: false,
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loginAdmin":
      return {};
    case "login":
      return { ...state };
    case "logout":
      return { initialState };
    default:
      throw new Error("Unknown action type");
  }
}

const BASE_URL = "http://localhost:3000/";

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isAdmin }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function login(email, password) {
    const Response = await fetch(`${BASE_URL}api/authUser/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const res = await Response.json();
    console.log(res);
    if (res.success) {
      localStorage.setItem("token", res.json);
      dispatch({
        type: "login",
        payload: {
          email,
          password,
        },
      });
    //   await fetchPlaces();
    //   await getPinLocation();
      alert("Logged In Successfully!");
    } else {
      alert(res.msg);
    }
  }
  async function loginAdmin(email, password) {
    const Response = await fetch(`${BASE_URL}api/authAdmin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const res = await Response.json();
    console.log(res);
    if (res.success) {
      localStorage.setItem("token", res.json);
      dispatch({
        type: "loginAdmin",
        payload: {
          email,
          password,
        },
      });
    //   await fetchPlaces();
      alert("Logged in successfully");
    } else {
      alert(res.msg);
    }
  }

  async function createUser(
    name,
    email,
    password,
    imageUrl = "https://i.pravatar.cc/100?u=zz"
  ) {
    console.log(name);
    const Response = await fetch(`${BASE_URL}api/authUser/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, imageUrl }),
    });
    const res = await Response.json();
    console.log(res);
    return res;
  }

  function logout() {
    localStorage.removeItem("token");
    // setIsNotification(false);
    // setReqNav(false);
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        loginAdmin,
        logout,
        createUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside AuthProvider");
  }
  return context;
}

export { useAuth, AuthProvider };
