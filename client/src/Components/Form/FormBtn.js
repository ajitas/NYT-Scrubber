import React from "react";
import "./FormBtn.css"

const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor: "#FF47DA", color: "#EDF2F4"}} className="btn">
    {props.children}
  </button>
);

export default FormBtn;