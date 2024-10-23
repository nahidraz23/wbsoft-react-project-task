import { useContext, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { BasicContext } from "../../ContextAPIs/BasicProvider";

const Search = () => {
    const axiosPublic = useAxiosPublic()
    const [searchTerm, setSearchTerm] = useState("");
    const { result, setResult } = useContext(BasicContext)
    const size = Object.keys(result).length;

    useEffect(() => {
        const values = searchTerm.split(',');
        if (values.length === 2 && values[0] && values[1]) {
            handleSearch(values[0].trim(), values[1].trim());
        }
    }, [searchTerm]);

    const handleSearch = async (form_no, phone_no) => {
        // Handle the search logic here
        const payload = {
            form_no: form_no,
            phone_no: phone_no
        }

        const res = await axiosPublic.post('/search-purchase-data', payload);
        setResult(res.data.singleCoursePurchaseData)
    };

    console.log(size)

    return (
        <div className="min-h-screen flex flex-col text-text_40px font-bold items-center justify-center">
            <h1 className="w-[600px] mx-auto">Search here</h1>
            <label htmlFor="search" className="text-sm">Please separate the <span className="text-blue-500">form no</span> and <span className="text-blue-500">phone no</span> by comma(,).</label>
            <div className="h-[52px] relative col-span-4 w-[600px] mx-auto">
                <input
                    type="text"
                    name="search"
                    placeholder="Form No, Phone No"
                    className="text-black px-2 w-full block h-full outline-0 rounded-[4px] border"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>
                    <IoMdSearch className="text-2xl text-black absolute right-2 top-3" />
                </button>
            </div>
            {
                size > 0
                    ?
                    <div className="lg:my-8 md:my-6 my-8 px-p_4px">
                        <p className=" md:my-2 font-semibold">Courses:</p>
                        <table className="overflow-x-auto border w-full">
                            <thead className="b w-full">
                                <tr className="text-sm ">
                                    <th className="lg:w-20 md:w-16 w-8 py-2 md:py-4 lg:py-6 border ">
                                        Image
                                    </th>
                                    <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                                        Course Name
                                    </th>
                                    <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                                        Student   Name
                                    </th>
                                    <th className="lg:w-20 md:w-20 w-16 py-2 md:py-4 lg:py-6 border">
                                        Quantity
                                    </th>
                                    <th className="lg:w-20 md:w-20 w-16  py-2 md:py-4 lg:py-6 border text-center">
                                        Price(BDT)
                                    </th>
                                    <th className="lg:w-20 md:w-20 w-16  py-2 md:py-4 lg:py-6 border text-center">
                                        Total(BDT)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="md:text-base text-sm font-semibold">

                                <tr >
                                    <td className="border text-center w-10 h-12 px-2">
                                        <img
                                            className=" w-full h-20 object-center mx-auto"
                                            src={result.photo}
                                            alt=''
                                        />
                                    </td>
                                    <td className="lg:py-6 md:py-4 py-2 text-center border">
                                        {result.course_data?.course_name}
                                    </td>
                                    <td className="lg:py-6 md:py-4 py-2 text-center border">
                                        {result.name}
                                    </td>
                                    <td className="lg:py-6 md:py-4 py-2 text-center border">
                                        {result.course_qty}
                                    </td>
                                    <td className="lg:py-6 md:py-4 py-2 text-center border">
                                        {result.discount_course_fee}Tk
                                    </td>
                                    <td className="lg:py-6 md:py-4 py-2 text-center border">
                                        {result.sub_total_course_fee}Tk
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    :
                    ''
            }
        </div>

    );
};

export default Search;
