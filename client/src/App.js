import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Box } from '@material-ui/core'

//components
import Header from './components/header/Header'
import Home from './components/home/Home'
import Cart from './components/cart/Cart'
import { TemplateProvider } from './components/template/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/product/DetailView' 

function App() {

  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box >
          <Routes>
            <Route exact path='/'  element={<Home />} />
            <Route exact path='/cart'  element={<Cart />} />
            <Route exact path='/product/:id' element={<DetailView />} />
            </Routes>
            </Box>
          </BrowserRouter>
      </ContextProvider>
      </TemplateProvider>
  );
}

export default App;
