import React, { useState } from "react";
import axios from "axios";

export default function ProductRegister() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productToSend = {
      ...product,
      price: Number(product.price),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/product/register",
        productToSend
      );
      alert(response.data);
      setProduct({ name: "", price: "", category: "" });
    } catch (error) {
      console.error("등록 실패:", error);
      alert("상품 등록 실패");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>상품 등록</h2>
      <div>
        <label>상품명:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>가격:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>카테고리:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button type="submit">등록</button>
      </div>
    </form>
  );
}
