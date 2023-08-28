
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom'
import About from './Component/About/About'
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Carousel from './Component/Carousel/Carousel'
import Market from './Component/Market/Market';
import Article from './Component/Article/Article';


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

