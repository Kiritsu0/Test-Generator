import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Generator from "./components/generator";
import Test from "./components/test";
import Context from './components/context';

function App() {
  return (
    <Context>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/generator' element={<Generator />}/>
          <Route path='/test' element={<Test />}/>
        </Routes>
      </HashRouter>
    </Context>
    
  );
}

export default App;
