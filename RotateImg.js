

import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { StartImg } from './actions';

export default function  RotateImg(){
    const dispatch = useDispatch()
    const stop = useSelector(state=>state.Condition)

    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={
              "App-logo" +
              (stop ? "":" App-logo-paused")
            }
            alt="logo"
            onClick={
              () =>dispatch(StartImg())
            }
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
}

