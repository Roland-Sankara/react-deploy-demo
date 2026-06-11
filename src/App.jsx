import {BrowserRouter, Routes, Route, Link} from "react-router";
import {useState} from 'react'

import './App.css';
import ProfilePage from "./pages/ProfilePage";
import Counter from "./components/Counter";

function App(){
  let [countTwo, setCountTwo] = useState(1)

  function updateCount(){
    setCountTwo(countTwo+1)
  }

  return(
    <div className='box'>

      {/* <h1>The World Is Huge 🤯</h1>
      <button onClick={updateCount}>Add From App</button>

      <Counter countValue={countTwo}/> */}

      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/profile">Profile</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </header>

        
        <Routes>

          <Route 
            path="/home" 
            element={
              <div>
                <h1>Home Page</h1>
                <h1>Hello World</h1>
                <p style={{color: "green", fontSize: "30px"}}>{1+2}</p>
                { 5>3 ? <span>Hello</span> : <span>No!!!</span>}
              </div>
            }
          />

          <Route 
            path="/profile" 
            element={<ProfilePage/>}
          />
        
        <Route 
          path="/contact" 
          element={
          <div>
            <h1>Contact Us</h1>
            <p>Phone: 073883929292</p>
            <p>Email: roland@gmail.com</p>
          </div>
          }
        />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;