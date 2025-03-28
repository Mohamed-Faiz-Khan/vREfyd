import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../styling/Home.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  const [data, setData] = useState([]);
  const [initial, setInitial] = useState(0);
  const [constraint, setConstraint] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products");
        setData(res.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  
  const filteredData = data.filter((item) =>
    item.pname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const paginatedProducts = filteredData.slice(initial, constraint);
  const newData = paginatedProducts.map((item) => (
    <Card key={item.id} item={item} />
  ));

  return (
    <>
      <div className="header">
        <Header setSearchTerm={setSearchTerm} />
      </div>


      <div className="overall">
        <div className="rows">
          {newData.length ? newData : "No matching data found"}
        </div>
      </div>

      <div className="footer">
        <button
          onClick={() => {
            setInitial(0);
            setConstraint(3);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setInitial(3);
            setConstraint(6);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setInitial(6);
            setConstraint(9);
          }}
        >
          3
        </button>

        <Footer />
      </div>
    </>
  );
}
