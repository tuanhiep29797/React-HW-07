import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./componentes/Login";
import DetailUser from "./componentes/DetailUser";
import DetailProduct from "./componentes/DetailProduct";
import Users from "./componentes/Users";
import Dashboard from "./componentes/Dashboard";
import Products from "./componentes/Products";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<DetailUser />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<DetailProduct />} />
    </Routes>
  );
}

export default App;
