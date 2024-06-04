//import { db } from "../firebase/Config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  //signInWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  //signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { app } from "../firebase/Config";
export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanup
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);
  const auth = getAuth(app);

  function checkIfsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfsCancelled();
    setLoading(true);
    setError(null);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 carcateres.";
      } else isFinite(error.message.includes("email-already"));
      {
        systemErrorMessage = "E-mail já cadastrado";
      }
      {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }
      setLoading(false);

      setError(systemErrorMessage);
    }
  };
  //login
  const login = async (data) => {
    setLoading(true);
    setError(false);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado.";
      } else if (error.message.includes("wrong-password"));
      systemErrorMessage = "Usuário não encontrado";
      {
        systemErrorMessage = "Senha incorreta";
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  const logout = () => {
    checkIfsCancelled();
    signOut(auth);
  };
  return {
    auth,
    createUser,
    error,
    loading,
    login,
    logout,
  };
};
