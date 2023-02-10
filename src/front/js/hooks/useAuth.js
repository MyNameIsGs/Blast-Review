import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export default function useAuth() {
  const { store, actions } = useContext(Context);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  //set user in context and push them home
  const setUserContext = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("jwt-token");
      const resp = await fetch(`${process.env.BACKEND_URL}/api/protected`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token, // ⬅⬅⬅ authorization token
        },
      });

      const data = await resp.json();
      if (resp.ok) {
        actions.storeUser(data);
      }
      setIsLoading(false);
      actions.setInitialized(true);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      actions.setInitialized(true);
      setError(e);
    }
  };

  const logOut = () => {
    localStorage.removeItem('jwt-token');
    actions.storeUser(null);
    actions.storeToken(null);
  };
  return {
    setUserContext,
    error,
    isLoading,
    logOut,
  };
}