import React, { createContext } from "react";
import AllProducts from "../Components/Assets/allProducts";

export const ShopContext = createContext(); // Invoke createContext to create a context

const ShopContextProvider = (props) => {
    const contextValue = AllProducts;

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
