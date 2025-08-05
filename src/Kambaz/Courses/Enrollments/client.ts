import axios from "axios";
axios.defaults.withCredentials = true;

export const getUserEnrollments = async (userId: string) =>
    (await axios.get(`/api/users/${userId}/enrollments`)).data;

export const enrollUserInCourse = async (userId: string, courseId: string) =>
    axios.post(`/api/users/${userId}/enroll/${courseId}`);

export const unenrollUserFromCourse = async (userId: string, courseId: string) =>
    axios.delete(`/api/users/${userId}/unenroll/${courseId}`);
