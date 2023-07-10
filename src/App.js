
import './App.css';
import Navbar from './Component/Navbar';
import {Routes,Route} from 'react-router-dom'
import About from './Component/About'
import Home from './Component/Home';
import Blog from './Component/Blog';
import Carousel from './Component/Carousel'
import Market from './Component/Market';
import Article from './Component/Article';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/About' exact element={<About/>}/>
      <Route path='/Home'  element={<Home/>}/>
      <Route path='/Carousel'  element={<Carousel/>}/>
      <Route path='/Market'  element={<Market/>}/>
      <Route path='/Blog'  element={<Blog/>}/>
      <Route path='/Article/:title' element={<Article/>}/>
    </Routes>
    </div>
  );
}

export default App;

