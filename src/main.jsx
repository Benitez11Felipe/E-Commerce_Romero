import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp04veFGQUjLQOaBFbvIse72dnW8DmoLM",
  authDomain: "e-commerce-3578a.firebaseapp.com",
  projectId: "e-commerce-3578a",
  storageBucket: "e-commerce-3578a.appspot.com",
  messagingSenderId: "69017292207",
  appId: "1:69017292207:web:79779c8162fd6dc2fcb35a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { db };
