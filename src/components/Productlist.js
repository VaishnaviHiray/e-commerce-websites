// import React, { useEffect, useState } from "react";
// import NavbarBanner from "./NavbarBanner";
// import Product from "./Product";
// import './Productlist.css';

// function Productlist() {
//   let [products, setProducts] = useState([]);
//   let [categories, setCategories] = useState([]);
//   let [selectedCategory, setSelectedCategory] = useState("All");

//   let collectData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/userApp/getprod");
//       let result = await response.json();
//       setProducts(result);

//       let uniqueCategories = ["All", ...new Set(result.map((product) => product.category))];
//       setCategories(uniqueCategories);
//     } catch (error) {
//       console.log(error);
//     }
//   }; 

//   useEffect(() => {
//     collectData();
//   }, []);

//   let filteredProducts = products.filter(
//     (product) => selectedCategory === "All" || product.category === selectedCategory
//   );
//   return (
//     <>
//       <NavbarBanner  categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

//       {/* Conditionally render the Product component */}
//       {selectedCategory === "All" && <Product />}

//       <div className="row">
//         {filteredProducts.map((product, index) => (
//           <div className="card col-3 m-2" key={index}>
//             <img
//               src={product.image}
//               className="card-img-top"
//               alt={product.name} />
//             <div className="card-body">
//               <h5 className="card-title">{product.name}</h5>
//               <p className="card-text">{product.price}</p>
//               <a href="#"className="btn btn-primary">
//                 Add To Cart
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Productlist;

// import React, { useEffect, useState } from "react";
// import NavbarBanner from "./NavbarBanner";
// import Product from "./Product";
// import "./Productlist.css";

// function Productlist() {
//   let [products, setProducts] = useState([]);
//   let [categories, setCategories] = useState([]);
//   let [selectedCategory, setSelectedCategory] = useState("All");
//   let [cart, setCart] = useState([]); // Cart state

//   // Function to fetch data from API
//   let collectData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/userApp/getprod");
//       let result = await response.json();
//       setProducts(result);

//       let uniqueCategories = [
//         "All",
//         ...new Set(result.map((product) => product.category)),
//       ];
//       setCategories(uniqueCategories);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     collectData();
//   }, []);

//   // Filter products based on the selected category
//   let filteredProducts = products.filter(
//     (product) =>
//       selectedCategory === "All" || product.category === selectedCategory
//   );

//   // Function to add a product to the cart
//   let addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]); // Add product to the cart
//     console.log("Product added to cart:", product); // Debug message
//   };

//   return (
//     <>
//       <NavbarBanner
//         categories={categories}
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//       />

//       {/* Conditionally render the Product component */}
//       {selectedCategory === "All" && <Product />}

//       <div className="row">
//         {filteredProducts.map((product, index) => (
//           <div className="card col-3 m-2" key={index}>
//             <img
//               src={product.image}
//               className="card-img-top"
//               alt={product.name}
//             />
//             <div className="card-body">
//               <h5 className="card-title">{product.name}</h5>
//               <p className="card-text">₹{product.price}</p>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => addToCart(product)}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Cart Display */}
//       <div className="cart">
//         <h3>Shopping Cart</h3>
//         {cart.length === 0 ? (
//           <p>Cart is empty</p>
//         ) : (
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 {item.name} - ₹{item.price}
//               </li>

//             ))}
//           </ul>
//         )}

//       </div>
//     </>
//   );
// }

// export default Productlist;
import React, { useEffect, useState } from "react";
import NavbarBanner from "./NavbarBanner";
import Product from "./Product";
import "./Productlist.css";
import Cart from "./Cart";

function Productlist() {
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState("All");
  let [cart, setCart] = useState([]);
  let collectData = async () => {
    try {
      let response = await fetch("http://localhost:5000/userApp/getprod");
      let result = await response.json();
      setProducts(result);

      let uniqueCategories = ["All", ...new Set(result.map((product) => product.category)),];
      setCategories(uniqueCategories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    collectData();
  }, []);
  let filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );
  let addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Product added to cart:", product);
  };

  let calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <>
      <NavbarBanner categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      {selectedCategory === "All" && <Product/>}
      <div className="row">
        {filteredProducts.map((product, index) => (
          <div className="card col-3 m-2" key={index}>
            <img src={product.image} className="card-img-top"alt={product.name}/>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">₹{product.price}</p>
              <button className="btn btn-primary"onClick={() => addToCart(product)}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart mt-5">
        <h3>Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} * ₹{item.price}
                </li>
              ))}
            </ul>
            <h4>Total Price: ₹{calculateTotalPrice()}</h4>
            <h>Thank You Visit Again!!</h>

          </>
        )}
      </div>
    </>
  );
}

export default Productlist;
