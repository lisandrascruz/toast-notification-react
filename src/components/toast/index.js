import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";

const Toast = (props) => {
  const { toastList } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) deleteToast(toastList[0].id);
    }, 2000);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [list]);

  const deleteToast = (id) => {
    const toastListItem = toastList.findIndex((e) => e.id === id);
    toastList.splice(toastListItem, 1);

    const listItemIndex = list.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    setList([...list]);
  };

  return (
    <div className={`notification-container`}>
      {list.map((toast, i) => (
        <div
          key={i}
          className={`notification`}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <div className="notification-image">
            <img src={toast.icon} alt="" />
          </div>
          <div>
            <p className="notification-title">{toast.title}</p>
            <p>{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Toast.propTypes = {
  toastList: PropTypes.array.isRequired,
};

export default Toast;
