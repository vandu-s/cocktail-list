import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CocktailPage from './CocktailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cocktail/:id" element={<CocktailPage />} />
        </Routes>
        {/* <Banner />
        <Content /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
