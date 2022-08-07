import React from "react";
import FavoriteTokenItem from "./FavoriteTokenItem";
import { useSelector } from "react-redux";
import styles from "./FavoriteTokenList.module.css";

const FavoriveTokenList = () => {
  let favoriteList = useSelector((state) => state.global.tokens);

  let favoriteListTransformed = favoriteList.map((token) => {
    if (token.favorite) {
      return (
        <FavoriteTokenItem
          key={Math.random().toFixed(8)}
          name={token.tokenName}
          price={token.price}
        />
      );
    }
  });
  // change style
  return (
    <ul className={(styles.favlist, "favorites")}>{favoriteListTransformed}</ul>
  );
};

export default FavoriveTokenList;
