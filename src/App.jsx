import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
//import firebase from "firebase/app";
import "firebase/firestore";
//importação de hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
//importando as páginas
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UpdatePost from "./pages/UpdatePost/UpdatePost";
//importando os componentes

import Navbar from "../src/components/NavBar/Navbar";
//import Footer from "./components/Footer";

// importando o contexto
import { AuthProvider } from "./context/AuthContext";
import CreatePost from "./pages/Createpost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMjIqH-K3Fzpd9pU8iHGVfYfikPJsZgBU",
  authDomain: "miniblog-3682c.firebaseapp.com",
  projectId: "miniblog-3682c",
  storageBucket: "miniblog-3682c.appspot.com",
  messagingSenderId: "1089573229943",
  appId: "1:1089573229943:web:90f6048a80f56adeca3d72",
};

const app = initializeApp(firebaseConfig);
function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);
  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/UpdatePost"
                element={user ? <UpdatePost /> : <Navigate to="/UpdatePost" />}
              />

              <Route
                path="/dashboard"
                element={!user ? <Register /> : <Dashboard to="/login" />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
