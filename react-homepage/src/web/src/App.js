import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Testpage from './pages/testpage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/test"element={<Testpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
