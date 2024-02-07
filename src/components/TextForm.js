import React, { useState } from "react";

export default function TextForm(props) {
  const handelupclick = () => {
    // console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Convert to the uppercase", "success");
  };
  const handelloclick = () => {
    // console.log("uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Convert to the lowercase", "success");
  };

  const handelclearclick = () => {
    // console.log("uppercase was clicked" + text);
    let newtext = " ";
    setText(newtext);
  };

  const handelonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter the text here");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
          <button
            type="button"
            onClick={handelupclick}
            className="btn btn-primary my-3 mx-2"
          >
            Convert to UpperCase
          </button>
          <button
            type="button"
            onClick={handelloclick}
            className="btn btn-primary my-3 mx-2"
          >
            Convert to LowerCase
          </button>
          <button
            type="button"
            onClick={handelclearclick}
            className="btn btn-primary my-3 mx-2"
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
