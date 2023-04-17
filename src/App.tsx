import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreateLocation from './pages/CreateLocation';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-location" element={<CreateLocation />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
