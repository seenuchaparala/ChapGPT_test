import React, { useState } from "react";

const ShoppingCard = ({ productImage, productPrice, productName }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [cart, setCart] = useState(false);

  return (
    <div style={styles.cardContainer}>
      <img style={styles.productImage} src={productImage} alt={productName} />
      <div style={styles.textContainer}>
        <h3>{productName}</h3>
        <p style={styles.price}>{productPrice}</p>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.likeButton} onClick={() => setLikes(likes + 1)}>
          Like ({likes})
        </button>
        <button
          style={styles.dislikeButton}
          onClick={() => setDislikes(dislikes + 1)}
        >
          Dislike ({dislikes})
        </button>
        <button
          style={styles.addToCartButton}
          onClick={() => setCart(!cart)}
        >
          {cart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  productImage: {
    width: "30%",
    height: "auto",
  },
  textContainer: {
    width: "40%",
    paddingLeft: "20px",
  },
  price: {
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "30%",
    display: "flex",
    justifyContent: "space-between",
  },
  likeButton: {
    backgroundColor: "lightgreen",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  dislikeButton: {
    backgroundColor: "lightcoral",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  addToCartButton: {
    backgroundColor: "orange",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ShoppingCard;
