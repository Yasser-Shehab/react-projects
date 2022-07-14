import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    let alertTimer = setTimeout(() => {
      removeAlert(false, "", "");
    }, 3000);
    return () => {
      clearTimeout(alertTimer);
    };
  }, [list]);
  return <h2 className={`alert alert-${type}`}>{msg}</h2>;
};

export default Alert;
