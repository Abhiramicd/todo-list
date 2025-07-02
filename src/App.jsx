import Input from './components/input';
import './App.css'
import Card from './components/card';
import Task from './components/task';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './about';
import Navbar from './navbar';

function App() {
  

  
  return (
    <BrowserRouter>
    <title>To-do-list</title>
      <div className='App'>
        <header>
          <h1>My React App</h1>
          <h2>This is my first application</h2>
        </header>
        <Navbar/>
        <main>
        <Routes>
          <Route path="/" element={<Task />}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
        </main>
     
       </div>
    </BrowserRouter>
  )
}

export default App
