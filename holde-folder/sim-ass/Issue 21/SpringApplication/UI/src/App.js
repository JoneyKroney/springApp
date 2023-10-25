import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './components/page.js';
function App() {

const [ballz, setballz] = useState("No Ballz")

//useEffect(()=>{

//fetch('/api/dadjokes')
//            .then(response => response.text())
//            .then(message => {
//                console.log({message: message});
//            });
//
//
//  }, [])

  return (
    <div className="App">
        <Page/>
    </div>
  );
}

export default App;
