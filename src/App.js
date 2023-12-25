import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
// import React from 'react';
import Result from './Result';

const secretNum = Math.floor(Math.random() * 10) + 1;

function App() {

  const [term, setTerm] = useState("");

  const handelChange = (e) => {
    setTerm(e.target.value)

  }
  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">Guess the number between 1 to 10  </label>
      </div>
      <input id='term'
        type='text'
        name='term'
        onChange={handelChange}
      />
      <Result secretNum={secretNum} term={term} />

    </div>
  )
}

export default App;
