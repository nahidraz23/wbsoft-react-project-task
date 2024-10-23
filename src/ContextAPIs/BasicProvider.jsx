/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";

export const BasicContext = createContext(null);

const BasicProvider = ({ children }) => {
    const [sidebarOpen, setSideBarOpen] = useState(true);
    const [modalImage, setModalImage] = useState(true);
    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    })

    const [cartSummary, setCartSummary] = useState(() => {
        const savedCartSummary = localStorage.getItem('cartSummary');
        return savedCartSummary ? JSON.parse(savedCartSummary) : [];
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartSummary', JSON.stringify(cartSummary));
    }, [cart, cartSummary])

    // console.log(cart)
    const componentRef = useRef()

    const info = {
        sidebarOpen,
        setSideBarOpen,
        modalImage,
        setModalImage,
        componentRef,
        cart,
        setCart,
        cartSummary,
        setCartSummary,
        quantity,
        setQuantity,
    };
    return <BasicContext.Provider value={info}>{children}</BasicContext.Provider>;
};

export default BasicProvider;

