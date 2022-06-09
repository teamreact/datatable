
import './App.css';
import 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
//Importamos los componenetes Creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarExample from './layouts/navbar';
const App = () => {

    return (
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element ={<NavBarExample/>}>
                <Route index element={<Home />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='*' elemnt={<Navigate replace to="/"/>}/>
              </Route>
            </Routes>
          </BrowserRouter>

      </div>
    );
}

export default App;
