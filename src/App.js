import React, { useState } from "react";
import Toast from "./components/toast/index";
import checkIcon from "./assets/check.svg";
import errorIcon from "./assets/error.svg";
import infoIcon from "./assets/info.svg";
import warningIcon from "./assets/warning.svg";
import Button from "./components/button/index";
import "./App.css";

const buttonProps = [
  {
    id: 1,
    type: "success",
    className: "success",
    label: "Success",
  },
  {
    id: 2,
    type: "danger",
    className: "danger",
    label: "Danger",
  },
  {
    id: 3,
    type: "info",
    className: "info",
    label: "Info",
  },
  {
    id: 4,
    type: "warning",
    className: "warning",
    label: "Warning",
  },
];

const App = () => {
  const [list, setList] = useState([]);

  const showToast = (type) => {
    const id = Math.floor(Math.random() * 101 + 1);
    let toastProperties = {};

    switch (type) {
      case "success":
        toastProperties = {
          id,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#4D805A",
          icon: checkIcon,
        };
        console.log("sucesso", toastProperties);
        break;
      case "danger":
        toastProperties = {
          id,
          title: "Danger",
          description: "This is a error toast component",
          backgroundColor: "#d9534f",
          icon: errorIcon,
        };
        break;
      case "info":
        toastProperties = {
          id,
          title: "Info",
          description: "This is an info toast component",
          backgroundColor: "#5bc0de",
          icon: infoIcon,
        };
        break;
      case "warning":
        toastProperties = {
          id,
          title: "Warning",
          description: "This is a warning toast component",
          backgroundColor: "#f0ad4e",
          icon: warningIcon,
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

        <div className="toast-buttons">
          {buttonProps.map((e) => (
            <Button
              key={e.id}
              className={`${e.className}`}
              label={e.label}
              handleClick={() => showToast(e.type)}
            />
          ))}
        </div>
      </div>

      <Toast toastList={list} />
    </div>
  );
};

export default App;
