import React from "react";
import { useState, useEffect } from "react";

export const InputForm = (props) => {
  const [input, setInput] = useState(props.value);

  const _onChangeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      {props.type == "checkbox" && (
        <div className="form-group">
          <label>
            <strong>{props.title}</strong>
          </label>
          <input
            type={props.type}
            className="form-control"
            onChange={_onChangeInput}
            value={input}
            placeholder={props.title}
            id={props.id}
            name={props.name}
          />
        </div>
      )}
      {props.type == "text" && (
        <div className="form-group">
          <label>
            <strong>{props.title}</strong>
          </label>
          <input
            type={props.type}
            className="form-control"
            onChange={_onChangeInput}
            value={input}
            placeholder={props.title}
            id={props.id}
            name={props.name}
          />
        </div>
      )}
    </>
  );
};
