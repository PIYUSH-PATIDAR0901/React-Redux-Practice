import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
const App = () => {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container text-center">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(decNumber())}
            title="Decrement"
          >
            <span>-</span>
          </button>
          <input
            type="text"
            name="quantity"
            className=" input-group-text m-auto"
            value={myState}
          />
          <button
            className="btn btn-primary"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
