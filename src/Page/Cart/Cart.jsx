/* eslint-disable react/react-in-jsx-scope */
import { useContext } from "react";
import { Link } from "react-router-dom";


import { RiDeleteBin5Line } from "react-icons/ri";
import { BasicContext } from "../../ContextAPIs/BasicProvider";

const Cart = () => {
    const { cart, setCartSummary, quantity, setQuantity } = useContext(BasicContext);
    const totalPrice = cart[0]?.discount_price * quantity;

    // console.log(totalPrice)
    // console.log(cart)

    const handleCartSummary = (price, photo, course_name) => {
        const summary = { quantity, price, totalPrice, photo, course_name };
        setCartSummary(summary);
    }

    return (
        <div className="m-mt_16px">
            <h1 className="text-sm text-start md:text-text_xl lg:py-0 font-bold">
                Cart
            </h1>
            <div className="pt-p_16px">
                <div className="lg:flex items-start gap-3">
                    <div className="w-full lg:w-[58%] bg-white border-2">
                        <table className=" overflow-x-auto  w-full">
                            <thead>
                                <tr className="border-b-4 border-gray-300">
                                    <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
                                        Course
                                    </th>
                                    <th className="text-[14.4px] font-bold p-[7px] text-black">
                                        Price
                                    </th>
                                    <th className="text-[14.4px] font-bold p-[7px] text-black">
                                        Quantity
                                    </th>
                                    <th className="text-[14.4px] font-bold p-[7px] text-black">
                                        Sub Total
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="overflow-x-auto ">

                                <tr className="border-b border-gray-300 overflow-x-auto">
                                    <td>
                                        <div className="flex items-center justify-center ">
                                            <div className="w-[20%] text-center flex items-center justify-center ">
                                                <RiDeleteBin5Line
                                                    className="text-xl hover:text-footer_color cursor-pointer"

                                                />
                                            </div>
                                            <div className="flex flex-col text-center justify-center items-center py-2  w-[80%]">
                                                <div className="mask">
                                                    <img
                                                        className="h-[40px] w-[70px]"
                                                        src={cart[0]?.photo}
                                                        alt='Course'
                                                    />
                                                </div>
                                                <p className="text-[14.4px] px-[7px] text-center flex ">
                                                    {cart[0]?.course_name}  <span className="hidden lg:flex "></span>
                                                </p>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                                            {cart[0]?.discount_price}
                                        </p>
                                    </td>
                                    <td>
                                        <div className="flex justify-center">
                                            <div className="border">
                                                {
                                                    quantity > 1
                                                        ?
                                                        <button
                                                            onClick={() => setQuantity(quantity - 1)}
                                                            className="px-4 w-[30px] font-bold font_standard my-1.5"

                                                        >
                                                            -
                                                        </button>
                                                        :
                                                        <button
                                                            className="text-gray-300 cursor-default px-4 w-[30px] font-bold font_standard my-1.5"

                                                        >
                                                            -
                                                        </button>
                                                }
                                            </div>
                                            <div className="border-y">
                                                {/* <input
                                                    value={quantity}
                                                    type="number"
                                                    

                                                /> */}
                                                <h1 className="font-bold w-[30px] lg:w-[60px] font_standard px-2 py-2 text-center mx-auto h-full">{quantity}</h1>
                                            </div>
                                            <div className="border">
                                                <button
                                                    onClick={() => setQuantity(quantity + 1)}
                                                    className="px-4 w-[30px] font-bold font_standard my-1.5"

                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[14.4px] font-bold p-[7px] text-black text-center">

                                            {totalPrice}
                                        </p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="lg:w-[41%] bg-white border-2 ">
                        <div className="px-[30px]">
                            <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                                Cart Summary
                            </h2>
                            <div className="py-3 flex justify-between border-b border-gray-300">
                                <p className="text-black font-bold">Total Price: {totalPrice}</p>
                                <p className="text-black font-bold">
                                </p>
                            </div>

                            <Link
                                onClick={() => handleCartSummary(cart[0]?.discount_price, cart[0]?.photo, cart[0]?.course_name)}
                                to={`/checkout`}
                                state={"bdt"}
                                className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
                            >
                                PROCEED TO CHECKOUT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
