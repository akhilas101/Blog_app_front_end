import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components.jsx/Login';
import AddPost from './components.jsx/AddPost';


import ViewPost from './components.jsx/ViewPost';
import { Registration } from './components.jsx/Registration';
import MyPost from './components.jsx/MyPost';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>

    <Route path= '' element={<Registration/>}/>
    <Route path= 'login' element={<Login/>}/>
    <Route path= 'add' element={<AddPost/>}/>
    <Route path= 'post' element={<MyPost/>}/>
    <Route path= 'view' element={<ViewPost/>}/>
    

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
