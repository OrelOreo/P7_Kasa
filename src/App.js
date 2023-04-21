import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import PageProduit from './Pages/PageProduit/PageProduit';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App"> 
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/:slug' element={<PageProduit />}/>
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<PageNotFound />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
