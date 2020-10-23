import React from "react";
import "../App.css";
import { useHistory, BrowserRouter as Router } from "react-router-dom";

const Button = (props) => {
  let history = useHistory();
  const clickMe = (id) => {
    history.push("/users/" + id);
  };
    return (
    <div>
      <button className="btnCard" onClick={() => clickMe(props.id)}>
        MORE DETAILS
      </button>
    </div>
  );
};

export default Button;
