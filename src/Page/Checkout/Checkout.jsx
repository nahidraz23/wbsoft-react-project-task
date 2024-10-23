import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { BasicContext } from "../../ContextAPIs/BasicProvider";
// import useAxiosPublic from '../../Hooks/useAxiosPublic'

const Checkout = () => {
    // const axiosPublic = useAxiosPublic();

    const { cartSummary, setOrder, setCart, setCartSummary } = useContext(BasicContext);
    const selectGender = useRef(null);
    const selectBloodGroup = useRef(null);
    const course_qty = cartSummary.quantity;
    const course_fee = parseInt(cartSummary.regular_price);
    const total_course_fee = course_fee * course_qty;
    const discount_course_fee = parseInt(cartSummary.discount_price);
    const sub_total_course_fee = discount_course_fee * course_qty;
    const course_id = cartSummary.course_id;
    const course_name = cartSummary.course_name;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const photo = formData.get('photo');
        const name = form.name.value;
        const email = form.email.value;
        const phone_no = form.phone_no.value;
        const father_name = form.father_name.value;
        const father_phone_no = form.father_phone_no.value;
        const job_title = form.job_title.value;
        const local_guardian_name = form.local_guardian_name.value;
        const local_guardian_phone_no = form.local_guardian_phone_no.value;
        const nid_no = form.nid_no.value;
        const date_of_birth = form.date_of_birth.value;
        const gender = selectGender.current.value;
        const blood_group = selectBloodGroup.current.value;
        const present_address = form.present_address.value;
        const permanent_address = form.permanent_address.value;
        const course_image = cartSummary.photo;
        // const photo = form.photo.value.slice(12, 24);
        // const photo = ''
        const school_collage_name = form.school_collage_name.value;


        const coursePurchaseData = {
            name,
            email,
            phone_no,
            father_name,
            father_phone_no,
            job_title,
            local_guardian_name,
            local_guardian_phone_no,
            nid_no,
            date_of_birth,
            gender,
            blood_group,
            present_address,
            permanent_address,
            photo,
            course_fee,
            course_qty,
            total_course_fee,
            discount_course_fee,
            sub_total_course_fee,
            course_id,
            school_collage_name,
            course_image, 
            course_name,
        }

        setOrder(coursePurchaseData);
        // console.log(coursePurchaseData)
        setCart([]);
        setCartSummary([])

        navigate('/order-details')
    }

    return (
        <div className="  mt-5 border mx-2">
            <div className="bg-[#6f42c1] text-white p-6 text-center mb-5">
                <h2 className='text-5xl font-bold'>Trainee Admission Form</h2>
            </div>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                {/* Trainee Information Section */}
                <div className="form-section">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block font-semibold text-base mb-2">Full Name:<span className='text-red-600'>*</span></label>
                            <input
                                name='name'
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-semibold text-base mb-2">Email:<span className='text-red-600'>*</span></label>
                            <input
                                name='email'
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone_no" className="block font-semibold text-base mb-2">Phone No:<span className='text-red-600'>*</span></label>
                            <input
                                name='phone_no'
                                type="number"
                                id="phone_no"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label htmlFor="father_name" className="block font-semibold text-base mb-2">Father/Mother Name:<span className='text-red-600'>*</span></label>
                            <input
                                name='father_name'
                                type="text"
                                id="father_name"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="father_phone_no" className="block font-semibold text-base mb-2">Father/Mother Phone No:<span className='text-red-600'>*</span></label>
                            <input
                                name='father_phone_no'
                                type="number"
                                id="father_phone_no"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="school_collage_name" className="block font-semibold text-base mb-2">School/College:<span className='text-red-600'>*</span></label>
                            <input
                                name='school_collage_name'
                                type="text"
                                id="school_collage_name"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label htmlFor="job_title" className="block font-semibold text-base mb-2">Job Information:<span className='text-red-600'>*</span></label>
                            <input
                                name='job_title'
                                type="text"
                                id="job_title"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="local_guardian_name" className="block font-semibold text-base mb-2">Local Guardian’s Name:<span className='text-red-600'>*</span></label>
                            <input
                                name='local_guardian_name'
                                type="text"
                                id="local_guardian_name"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="local_guardian_phone_no" className="block font-semibold text-base mb-2">Local Guardian’s Mobile No:<span className='text-red-600'>*</span></label>
                            <input
                                name='local_guardian_phone_no'
                                type="number"
                                id="local_guardian_phone_no"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="nid_no" className="block font-semibold text-base mb-2">NID Number:<span className='text-red-600'>*</span></label>
                            <input
                                name='nid_no'
                                type="text"
                                id="nid_no"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="date_of_birth" className="block font-semibold text-base mb-2">Date of Birth:<span className='text-red-600'>*</span></label>
                            <input
                                name='date_of_birth'
                                type="date"
                                id="date_of_birth"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="gender" className="block font-semibold text-base mb-2">Gender:<span className='text-red-600'>*</span></label>
                            <select
                                ref={selectGender}
                                id="gender"
                                className="w-full border border-gray-300 rounded-md p-2"
                                defaultValue="Select Gender"
                            >
                                <option disabled>Select Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bloodGroup" className="block font-semibold text-base mb-2">Blood Group:<span className='text-red-600'>*</span></label>
                            <select
                                ref={selectBloodGroup}
                                id="bloodGroup"
                                className="w-full border border-gray-300 rounded-md p-2"
                                defaultValue="Select Blood Group"
                            >
                                <option disabled>Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="present_address" className="block font-semibold text-base mb-2">Present Address:<span className='text-red-600'>*</span></label>
                            <textarea
                                name='present_address'
                                id="present_address"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="permanent_address" className="block font-semibold text-base mb-2">Permanent Address:<span className='text-red-600'>*</span></label>
                            <textarea
                                name='permanent_address'
                                id="permanent_address"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="photo" className="block font-semibold text-base mb-2">Student Photo:<span className='text-red-600'>*</span></label>
                        <input
                            name='photo'
                            type="file"
                            id="photo"
                            accept="image/jpeg, image/png, image/gif, image/svg+xml"
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>
                <div className="m-mt_16px">
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
                                                                src={cartSummary?.photo}
                                                                alt='Course'
                                                            />
                                                        </div>
                                                        <p className="text-[14.4px] px-[7px] text-center flex ">
                                                            {cartSummary?.course_name}  <span className="hidden lg:flex "></span>
                                                        </p>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                                                    {cartSummary?.discount_price}
                                                </p>
                                            </td>
                                            <td>
                                                <div className="flex justify-center">
                                                    <div className="border">
                                                        <h1 className="font-bold w-[30px] lg:w-[60px] font_standard px-2 py-2 text-center mx-auto h-full">{cartSummary.quantity}</h1>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                                                    {cartSummary.totalPrice}
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
                                        <p className="text-black font-bold">Total Price</p>
                                        <p className="text-black font-bold">
                                            {cartSummary.totalPrice}
                                        </p>
                                    </div>

                                    <button className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full">
                                        <Link
                                            state={"bdt"}
                                        >
                                            Submit
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>


        </div>
    );
};

export default Checkout;
