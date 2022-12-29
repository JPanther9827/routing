import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Skywalker from './component/Skywalker'
import Main from './component/Main'
import ErrorPage from './component/ErrorPage'
import yoda from './component/yoda';


function App() {
  return (
    <div className="App">
    <h1>Hi</h1>
    {/* <a href="/">a tag home</a> */}
    <Link to={"/"}>Link Home</Link> |
    <Link to={"/skywalker"}>skywalker</Link>
    <hr />

    <fieldset>
    <legend>Routes component</legend>


    <Routes>

      <Route path='/yoda/:varId' element={<yoda/>} />




      <Route path='/skywalker' element={
      <div>
      <Skywalker/> 
      <Main/> 
      </div>
      }/>

      <Route path='/' element={<Main/> } />

      <Route path="*" element={<ErrorPage/>} />

    </Routes>
    </fieldset>
    </div>
  );
}

export default App;
