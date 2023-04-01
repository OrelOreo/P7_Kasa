import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
