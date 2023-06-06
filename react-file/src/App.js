import logo from './logo.svg';
import './App.css';
import View_blog from './Component/View_blog';
import Blog from './Component/Blog';
import {Routes, Route} from 'react-router-dom';
import Addblog from './Component/Addblog';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<Blog/>}></Route>
            <Route path='/blog/:id' element={<View_blog/>}></Route>
            <Route path='/addblog' element={<Addblog/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
