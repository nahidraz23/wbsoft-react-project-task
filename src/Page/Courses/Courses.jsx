import { useEffect, useState } from "react";
import useGetCourse from "../../Hooks/useGetCourse";
import CourseCard from "./CourseCard";

const Courses = () => {
    const [courses] = useGetCourse();
    const [currentPage, setCurrentPage] = useState(1);
    const [coursePerPage, setCoursePerPage] = useState([]);
    const itemsPerPage = 3;
    const totalPages = 3;

    const pages = [...Array(totalPages).keys()]

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCoursePerPage(courses.slice(startIndex, endIndex))
    }, [currentPage, courses])

    const handlePrevBtn = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1)
    }

    const handleNextBtn = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
    }

    const handlePageClick = pageNo => {
        console.log(pageNo)
        setCurrentPage(pageNo)
    }

    return (
        <div className="m-mt_16px">


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    coursePerPage.map((course, index) => <CourseCard key={index} courseData={course}></CourseCard>)
                }
            </div>
            <div className="flex justify-center space-x-5 my-10">
                <button onClick={handlePrevBtn} className="btn">
                    Previos
                </button>
                {
                    pages.map((page, index) => <button key={index} className={currentPage === page+1 ? 'btn space-x-5 btn-primary' : ''} onClick={() => handlePageClick(page+1)}>{page+1}</button>)
                }
                <button onClick={handleNextBtn} className="btn">Next</button>
            </div>
        </div>
    );
};

export default Courses;