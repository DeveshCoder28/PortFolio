
import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import Navbar from './components/navbar/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './components/context';
import  Skills  from './components/skills/Skills';


const App=()=> {

  const theme= useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? "#222": "white", color: darkMode && "white"}}>
      <Navbar/>
      <Toggle/>
      <Intro/>
      <About/>
      <Skills/>
      <ProductList/>
      <Contact/>
      
    </div>
  );
}

export default App;
