
import './App.css';
import { Routes , Route } from 'react-router-dom'
import Header from './components/headers/Header';
import ProductList from './components/products/ProductList';
import ProductCreate from './components/products/ProductCreate'
import './assets/css/main.css'


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element= { <ProductList /> } />
          <Route exact path="/new-product" element= { <ProductCreate /> } />
        </Routes>
      </main>
    </>
   
  );
}

export default App;
