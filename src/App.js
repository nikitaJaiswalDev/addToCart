import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
