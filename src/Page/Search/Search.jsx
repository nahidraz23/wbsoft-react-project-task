import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Search = () => {
    const axiosPublic = useAxiosPublic()
    const [searchTerm, setSearchTerm] = useState("");
    const [result, setResult] = useState([])

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

    console.log(result)

    return (
        <div className="min-h-screen flex flex-col text-text_40px font-bold items-center justify-center">
            <h1 className="w-[600px] mx-auto">Search here</h1>
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
        </div>

    );
};

export default Search;
