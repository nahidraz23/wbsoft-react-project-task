// import { useState } from "react";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { useQuery } from "react-query";
import useGetCourse from "../../Hooks/useGetCourse";
import CourseCard from "./CourseCard";



const Courses = () => {

    // const axiosPublic = useAxiosPublic();
    // // const [courses, setCourses] = useState([]);

    // const {data: courses = []} = useQuery({
    //     queryKey: ['courses'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/get-course-list')
    //         return res.data;
    //     }
    //     return 
    // })

    const [courses] = useGetCourse();

    // console.log(courses)

    return (
        <div className="m-mt_16px">


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    courses.map((course, index) => <CourseCard key={index} courseData={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;