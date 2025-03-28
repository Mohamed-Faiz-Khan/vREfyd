// import React, { useEffect, useState } from "react";
// import "../styling/Card.css";
// import axios from "axios";

// export default function Card({ item }) {
//   const [values, setValues] = useState({
//     id: "",
//     pname: "",
//     price: 0,
//     nitem: 0,
//   });
//   const [cartitem, setCartitem] = useState(0);


//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/products/${item.id}`);
//         // console.log(response.data , 'getting values'); Proper
//         setValues(response.data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };
//     fetchProduct();
//   }, [item.id]); 

//   const updateItems = async (id) => {
//     try {
//       const response = await axios.put(`http://localhost:3000/products/${id}`, values);
//       console.log("Updated successfully:", response.data);
//     } catch (error) {
//       console.error("Error updating items:", error);
//     }
//   };

//   const HandleSubCart = (id) => {
//     // const newValue = values.nitem - 1; 
//     setCartitem(values.nitem - 1); 
//     // setValues({ ...values, nitem: newValue });
//     setValues({ ...values, nitem: cartitem });
//     updateItems(id);
//   };

//   const HandleAddToCart = (id) => {
//     // const newValue = values.nitem + 1;
//     // console.log(newValue, 'new value');
//     // setCartitem(values.nitem + 1);
//     // setValues({ ...values, nitem: values.nitem + 1 });
//     setValues({ ...values, nitem: cartitem });
//     console.log('called');

//     updateItems(id);
//   };





//   // let updateItems;
//   // useEffect(() => {

//   //    updateItems = async (id) => {
//   //     try {
//   //       const response = await axios.put(`http://localhost:3000/products/${id}`, values);
//   //       console.log("Updated successfully:", response.data);
//   //     } catch (error) {
//   //       console.error("Error updating items:", error);
//   //     }
//   //   };
//   // }, [HandleAddToCart, HandleSubCart]);



//   // console.log(values, 'values')

  
//   return (
//     <div className="container">
//       <div className="content">
//         <div className="image">
//           {item.image && <img src={item.image} alt={item.pname} />}
//         </div>

//         <div className="pname">
//           <p>{item.pname}</p>
//         </div>

//         <div className="price">
//           <p>{item.price}</p>
//         </div>

//         {values.nitem === 0 ? (
//           <button onClick={ () => {

//             HandleAddToCart(item.id);
//              setCartitem(values.nitem + 1);}}>Add to Cart</button>
//         ) : (
//           <div className="itemsUpdate">
//             <button onClick={() => HandleSubCart(item.id)}>-</button>
//             <p>{values.nitem}</p>
//             <button onClick={ () => {

//              HandleAddToCart(item.id);
//               setCartitem(values.nitem + 1);}}>
//                 +</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
















// import React, { useEffect, useState } from "react";
// import "../styling/Card.css";
// import axios from "axios";

// export default function Card({ item }) {
//   const [values, setValues] = useState({
//     id: "",
//     pname: "",
//     price: 0,
//     nitem: 0,
//   });
//   const [cartitem, setCartitem] = useState(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/products/${item.id}`);
//         // console.log(response.data , 'getting values'); Proper
//         setValues(response.data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };
//     fetchProduct();
//   }, [item.id]); 

//   const HandleSubCart = (id) => {
//     // const newValue = values.nitem - 1; 
//     setCartitem(values.nitem - 1); 
//     // setValues({ ...values, nitem: newValue });
//     setValues({ ...values, nitem: cartitem });
//     updateItems(id);
//   };

//   const HandleAddToCart = (id) => {
//     // const newValue = values.nitem + 1;
//     // console.log(newValue, 'new value');
//     setCartitem(values.nitem + 1); 
//     // setValues({ ...values, nitem: values.nitem + 1 });
//     setValues({ ...values, nitem: cartitem });

//     updateItems(id);
//   };



//   const updateItems = async (id) => {
//     try {
//       const response = await axios.put(`http://localhost:3000/products/${id}`, values);
//       console.log("Updated successfully:", response.data);
//     } catch (error) {
//       console.error("Error updating items:", error);
//     }
//   };

//   // let updateItems;
//   // useEffect(() => {

//   //    updateItems = async (id) => {
//   //     try {
//   //       const response = await axios.put(`http://localhost:3000/products/${id}`, values);
//   //       console.log("Updated successfully:", response.data);
//   //     } catch (error) {
//   //       console.error("Error updating items:", error);
//   //     }
//   //   };
//   // }, [HandleAddToCart, HandleSubCart]);



//   // console.log(values, 'values')

  
//   return (
//     <div className="container">
//       <div className="content">
//         <div className="image">
//           {item.image && <img src={item.image} alt={item.pname} />}
//         </div>

//         <div className="pname">
//           <p>{item.pname}</p>
//         </div>

//         <div className="price">
//           <p>{item.price}</p>
//         </div>

//         {values.nitem === 0 ? (
//           <button onClick={() => HandleAddToCart(item.id)}>Add to Cart</button>
//         ) : (
//           <div className="itemsUpdate">
//             <button onClick={() => HandleSubCart(item.id)}>-</button>
//             <p>{values.nitem}</p>
//             <button onClick={() => HandleAddToCart(item.id)}>+</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }






























import React, { useEffect, useState } from "react";
import "../styling/Card.css";
import axios from "axios";

export default function Card({ item }) {
  const [values, setValues] = useState({
    id: "",
    pname: "",
    price: 0,
    nitem: 0,
  });
  
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${item.id}`);
        // console.log(response.data , 'getting values'); Proper
        setValues(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [item.id]); 

  const HandleSubCart = (id) => {
  
    console.log(values);

        setValues((prev) => {
      const updatedValue = prev.nitem - 1;
      updateItems({...prev, nitem : updatedValue});
      return { ...prev, nitem: updatedValue };
    });
    console.log(values);

    updateItems();

    // console.log(values);
    // updateItems();
  };

  const HandleAddToCart = (id) => {
    
    console.log(values, '---before');

    setValues((prev) => {
      const updatedValue = prev.nitem + 1;
    console.log(prev ,updatedValue , '---after');

      updateItems({...prev, nitem : updatedValue});
      return { ...prev, nitem: updatedValue };
    });
    // console.log(values, '---after');

    // setDisplay(false);

  };

 
  const updateItems = async (newValue) => {
    try {
      const response = await axios.put(`http://localhost:3000/products/${item.id}`, newValue);
      console.log("Updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating items:", error);
    }
  };


  
  return (
    <div className="container">
      <div className="content">
      <div className="image">
  {item.pimage ? <img src={item.pimage} alt={item.pname} /> : <p>No Image Available</p>}
</div>



        <div className="pname">
          <p>{item.pname}</p>
        </div>

        <div className="price">
          <p>{item.price}</p>
        </div>

         {/* {display ? ( */}
        {values.nitem <= 0 ? (
          <button onClick={() => HandleAddToCart(item.id)}>Add to Cart</button>
        ) : (
          <div className="itemsUpdate">
            <button onClick={() => HandleSubCart(item.id)}>-</button>
            <p>{values.nitem }</p>
            <button onClick={() => HandleAddToCart(item.id)}>+</button>
          </div>
        )}

      </div>
    </div>
  );
}
















// import React, { useEffect, useState } from "react";
// import "../styling/Card.css";
// import axios from "axios";

// export default function Card({ item }) {
//   const [values, setValues] = useState({
//     id: "",
//     pname: "",
//     price: 0,
//     nitem: 0,
//   });
//   const [display, setDisplay] = useState(true);

//   // Fetch product data
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/products/${item.id}`);
//         setValues(response.data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };
//     fetchProduct();
//   }, [item.id]);

//   // Subtract Item
//   const HandleSubCart = (id) => {
//     setValues((prevValues) => {
//       const updatedValue = Math.max(prevValues.nitem - 1, 0); // Prevent negative values
//       updateItems(id, { ...prevValues, nitem: updatedValue });
//       return { ...prevValues, nitem: updatedValue };
//     });
//   };

//   // Add Item
//   const HandleAddToCart = (id) => {
//     setValues((prevValues) => {
//       const updatedValue = prevValues.nitem + 1;
//       updateItems(id, { ...prevValues, nitem: updatedValue });
//       return { ...prevValues, nitem: updatedValue };
//     });
//     setDisplay(false);
//   };

//   // Update API call
//   const updateItems = async (id, updatedValues) => {
//     try {
//       const response = await axios.put(`http://localhost:3000/products/${id}`, updatedValues);
//       console.log("Updated successfully:", response.data);
//     } catch (error) {
//       console.error("Error updating items:", error);
//     }
//   };

//   // Conditional Rendering
//   const realData = () => {
//     if (display) {
//       return <button onClick={() => HandleAddToCart(item.id)}>Add to Cart</button>;
//     } else {
//       return (
//         <div className="itemsUpdate">
//           <button onClick={() => HandleSubCart(item.id)}>-</button>
//           <p>{Math.max(values.nitem, 0)}</p>
//           <button onClick={() => HandleAddToCart(item.id)}>+</button>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="container">
//       <div className="content">
//         <div className="image">
//           {item.image && <img src={item.image} alt={item.pname} />}
//         </div>

//         <div className="pname">
//           <p>{item.pname}</p>
//         </div>

//         <div className="price">
//           <p>{item.price}</p>
//         </div>

//         <div>{realData()}</div>
//       </div>
//     </div>
//   );
// }
