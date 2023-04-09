import React from "react";
import {useState} from 'react'
import { Add1 } from "./actions/index";
import {useDispatch, useSelector} from 'react-redux'
function Add() {
    const [inp1, setInp1] = useState()
    const [inp2, setInp2] = useState()

    let myState = useSelector((state) => state.AdditionExample)
    let dispatch = useDispatch()

  return (
    <div className="conainer-fluid">
      <div className="container">
        <input
          type="text"
          name="quantity"
          className=" input-group-text m-auto"
          onChange={(e) => setInp1(+e.target.value)}
        />
      </div>
      <div className="container">
        <input
          type="text"
          name="quantity"
          className=" input-group-text m-auto"
          onChange={(e) => setInp2(+e.target.value)}
        />
      </div>
      <div className="conatiner m-auto justify-content-center align-item-center">
      <button
            className="btn btn-primary "
            onClick={ dispatch(Add1(inp1, inp2))}
          >ADDITION
          </button>
          <p>{myState}</p>
      </div>
    </div>
  );
}

export default Add;
