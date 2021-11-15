import React, { useState } from "react";
import Toast from "./components/toast/index";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);

  const showToast = (type) => {
    const id = Math.floor(Math.random() * 101 + 1);
    let toastProperties = {};

    switch (type) {
      case "success":
        toastProperties = {
          id,
          title: "Success!!",
          description: "lorem ipsun sucess!",
        };
        break;

      case "error":
        toastProperties = {
          id,
          title: "Error!",
          description: "lorem ipsun error, try again!",
        };
        break;

      default:
        setList([]);
    }
    setList([...list, toastProperties]);
  };

  return (
    <div className="app">
      <div className="app-header">
        <p>React Toast Component</p>
        <button onClick={() => showToast("success")}>Sucesso</button>
        <button onClick={() => showToast("error")}>Error</button>
      </div>

      <Toast toastList={list} />
    </div>
  );
};

export default App;
