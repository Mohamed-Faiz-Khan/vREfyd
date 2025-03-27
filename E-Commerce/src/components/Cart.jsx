import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

export default function Cart() {
  const [values, setValues] = useState([]);
  let sum = 0;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setValues(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const newData = values
    .filter((item) => item.nitem > 0)
    .map((item) => {
      sum += item.nitem * item.price;
      return (
        <tr key={item.id}>
          <td>{item.pname}</td>
          <td>{item.nitem}</td>
          <td>${item.price}</td>
          <td>${item.nitem * item.price}</td>
        </tr>
      );
    });

  return (
    <>
      <div>
        <Header />
        <div className="body">
          {newData.length > 0 ? (
            <>
              <table >
                <thead>
                  <tr >
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Product Price</th>
                    <th>Total Product Price</th>
                  </tr>
                </thead>
                <tbody>
                  {newData}
                </tbody>
              </table>
              <h3>Total Amount: ${sum}</h3>
            </>
          ) : (
            <p>Your cart is empty.</p>
            // <p>Your cart is empty. GO SHOP INSTEAD OF COMING HERE ;)</p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
