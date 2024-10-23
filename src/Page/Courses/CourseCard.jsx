import { useContext } from "react";
import { BasicContext } from "../../ContextAPIs/BasicProvider";
import { ToastContainer, toast } from 'react-toastify';

const CourseCard = ({ courseData }) => {

    const { cart, setCart } = useContext(BasicContext);
    const { photo, course_name, trainer_data, regular_price, discount_price } = courseData;
    const discountPercenteage = ((regular_price - discount_price) / regular_price) * 100;

    const handleAddCart = data => {
        if (cart.length < 1) {
            setCart((item) => [...item, data]);
            return toast.success('Course successfully added to cart')
        }
        else {
            toast.error('you cannot add more than 1 course')
        }


    }

    return (
        <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
                <img src={photo} alt="" className="h-72 w-full" />
                <div className="absolute top-0 left-0 p-2">
                    {/* <h3 className="text-white text-xl font-bold">{cart.length}</h3> */}
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">{course_name}</h2>
                <div className="flex items-center justify-between mb-4">
                    <span className="flex text-blue-500 text-md">★★★★★</span>
                    <span className="ml-2 text-gray-600 text-md font-bold">{trainer_data?.name}</span>
                </div>
                {/* <div className="flex gap-2 mb-4 flex-wrap">
                                {['Photography', 'Light set up', 'Camera angle', 'Self Development'].map((tag) => (
                                    <span key={tag} className="bg-yellow-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div> */}
                {/* <p className="text-gray-600 text-md mb-4">
                    Course Details <span className="text-blue-500">Show Details</span>
                </p> */}
                <hr />
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <span className="line-through text-gray-400 text-sm">{regular_price}Tk</span>
                        <span className="text-green-600 text-md font-bold ml-2">- {discount_price}Tk</span>
                        <span className="text-red-600 text-lg font-bold ml-2">Save {discountPercenteage.toFixed(0)}%</span>
                    </div>
                    {/* <span className="text-green-600 text-sm">Earn Tk 48</span> */}
                </div>
                <div className="mt-4 flex gap-2">
                    <button onClick={() => handleAddCart(courseData)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-500 w-full font-bold text-md">Add To Cart</button>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default CourseCard;