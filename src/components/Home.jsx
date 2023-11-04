import React, { useState, useEffect, useContext } from "react";
import "../App.css";

import { pizzas } from "../data";
import Header1 from "./Header";
import { Mycontext } from "../App";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function Home() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [filteredPizza, setFilteredPizza] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const [sortBy, setSortBy] = useState("price-high-to-low");

 const {login} = useContext(Mycontext)
 const navigate = useNavigate()

  useEffect(() => {
    const filterPizza = () => {
      const filteredItems = pizzas.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredPizza(filteredItems);
    };

    const delayDebounce = setTimeout(() => {
      filterPizza();
    }, 300);

    return () => {
      clearTimeout(delayDebounce);
    };
  }, [searchText]);

  const handleCardClick = (pizza) => {
    setSelectedPizza(pizza);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPizza(null);
    setShowModal(false);
  };

  const handleAddToCart = () => {
    if(login){
      setCartItems((prevItems) => [...prevItems, selectedPizza]);
      setCounter((prev) => prev + 1);
      handleCloseModal();
    }else{
      navigate("/login")
    }
   
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    if (sortBy === "price-high-to-low") {
      pizzas.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-low-to-high") {
      pizzas.sort((a, b) => b.price - a.price);
    }
    setFilteredPizza(pizzas);
  }, [sortBy]);

  console.log("counterValue", counter);

  return (
    <>
      <Header1
        searchText={searchText}
        setSearchText={setSearchText}
        cartItems={cartItems}
        counter={counter}
      />
      <div className="sort">
        <label className="sortlabel" htmlFor="sort-by">Sort By:</label>
        <select id="sort-by" value={sortBy} onChange={handleSortChange}>
          {/* <option className="options" value="price-high-to-low">Select filter</option> */}
          <option className="options" value="price-high-to-low">Price High to Low</option>
          <option className="options" value="price-low-to-high">Price Low to High</option>
        </select>
      </div>
      <div className="flexbox">
        {filteredPizza.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => handleCardClick(item)}
          >
            <img src={item.src} alt="pizza" className="card-img" />
            <h1 className="details">{item.name}</h1>
            <p className="details">{item.description}</p>
            <h4 className="details">₹ {item.price}</h4>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={selectedPizza.src} alt="pizza" className="modal-img" />
            <h1>{selectedPizza.name}</h1>
            <p>{selectedPizza.description}</p>
            <h4>₹ {selectedPizza.price}</h4>

            <Button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              variant="contained"
              endIcon={<ShoppingCartIcon />}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
