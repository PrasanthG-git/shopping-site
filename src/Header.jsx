import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartCount }) => {
  return (
    <header className="flex justify-between items-center bg-blue-600 p-4 text-white">
      <h1 className="text-xl">Fake Store</h1>
      <Link to="/cart">
        <div className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
          {cartCount > 0 && (
            <span className="top-0 right-0 absolute bg-red-500 px-2 py-1 rounded-full text-xs">
              {cartCount}
            </span>
          )}
        </div>
      </Link>
    </header>
  );
};

export default Header;
