// import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useGetCourse = () => {

    const axiosPublic = useAxiosPublic();

     const {data: courses = []} = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-course-list')
            return res?.data?.courseData;
        }
    })
    return [courses]
};

export default useGetCourse;