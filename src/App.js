import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import PageProduit from './Pages/PageProduit/PageProduit';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"

function App() {
  return (
    <div className="App"> 
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/logement/:id' element={<PageProduit />}/>
            <Route path='/about' element={<About />} />
            <Route path='/404' element={<PageNotFound/>} />
            <Route path='*' element={<Navigate to="/404" replace />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
