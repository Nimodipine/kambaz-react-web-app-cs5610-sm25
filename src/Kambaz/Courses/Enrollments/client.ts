import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

const axiosWithCredentials = axios.create({
    baseURL: REMOTE_SERVER,
    withCredentials: true
});


export const getUserEnrollments = async (userId: string) =>
    (await axiosWithCredentials.get(`/api/users/${userId}/enrollments`)).data;

export const enrollUserInCourse = async (userId: string, courseId: string) =>
    axiosWithCredentials.post(`/api/users/${userId}/enroll/${courseId}`);

export const unenrollUserFromCourse = async (userId: string, courseId: string) =>
    axiosWithCredentials.delete(`/api/users/${userId}/unenroll/${courseId}`);
