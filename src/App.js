import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductForm from './components/ProductForm/ProductForm';
import BoardEdit from './components/board/BoardEdit';
import BoardDetail from './components/board/BoardDetail';
import BoardList from './components/board/BoardList';
import BoardForm from './components/board/BoardForm';
import ProductEdit from './components/ProductEdit';
import ProductDelete from './components/ProductDelete/ProductDelete';
import ProductRegister from './product/ProductRegister';

export default function App() {
  return (
    <Router>
      <Header /> {/*  로그인 상태, 로그아웃 관리 */}
      <div className="App">
        <h1>상품 받아라</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/:id" element={<ProductDetail />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/board/list" element={<BoardList />} />
          <Route path="/board/detail/:id" element={<BoardDetail />} />
          <Route path="/board/form" element={<BoardForm />} />
          <Route path="/board/form/:id" element={<BoardForm />} />
          <Route path="/board/edit/:id" element={<BoardEdit />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <div className="componentTachi">
          <ProductRegister />
          <ProductDelete />
          <BoardList />
          <ProductEdit productId={1} />
        </div>
      </div>
    </Router>
  );
}
