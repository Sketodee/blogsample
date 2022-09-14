import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes> 
        <Route path='/'  element = {<Home />} />
        <Route path='forms'  element = {<Forms />} />
        <Route path='blog'  element = {<Blog />} />
      </Routes>
    
    </div>
  );
}

export default App;
