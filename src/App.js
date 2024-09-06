import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Generator from "./components/generator";
import Test from "./components/test";
import Context from './components/context';
import Main from './components/main';
import Loader from './components/loader';
import Nav from "./components/navbar";

function App() {
  return (
    <Context>
      <HashRouter>
        <Nav />
        <Loader />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/generator' element={<Generator />}/>
          <Route path='/test' element={<Test />}/>
        </Routes>
      </HashRouter>
    </Context>
    
  );
}

export default App;
