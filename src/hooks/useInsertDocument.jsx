import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/Config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};
const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "ISERT_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const userInsertDocument = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);
  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };
  const insertDocument = async (document) => {
    checkCancelBeforeDispatch({
      type: "LOADING",
    });
    try {
      const newDocument = { ...document, createAt: Timestamp.now() };
      const insertDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

      checkCancelBeforeDispatch({
        type: "INSERT_DOC",
        patload: insertDocument,
      });
    } catch (error) {
      checkCancelBeforeDispatch({
        type: "ERROR",
        patload: error.message,
      });
    }
  };
  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return { insertDocument, response };
};
