import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    enrollInCourse,
    unenrollFromCourse,
    setEnrolledCourses
} from "./reducer";

import * as enrollmentsClient from "./client"; // Client for enrollment API
import * as coursesClient from "../client";    // Client for course API

export default function EnrollmentsScreen() {
    const account = useSelector((state: any) => state.accountReducer.currentUser);
    const userId = account?._id;

    const dispatch = useDispatch();

    // Now managed by Redux:
    const enrolledCourseIds = useSelector(
        (state: any) => state.enrollmentsReducer.enrolledCourseIds
    );

    const [courses, setCourses] = useState([]);

    console.log("account from Redux:", account);
    console.log("userId:", userId);

    useEffect(() => {
        if (!userId) return;

        const loadData = async () => {
            try {
                console.log("Loading data for user:", userId);
                const allCourses = await coursesClient.fetchAllCourses();
                console.log("Fetched courses:", allCourses);

                const userEnrollments = await enrollmentsClient.getUserEnrollments(userId);
                console.log("User enrollments:", userEnrollments);

                setCourses(allCourses);
                dispatch(setEnrolledCourses(userEnrollments));
            } catch (err) {
                console.error("Failed to load courses or enrollments:", err);
            }
        };

        loadData();
    }, [userId, dispatch]);

    const toggleEnrollment = async (courseId: string) => {
        try {
            if (enrolledCourseIds.includes(courseId)) {
                await enrollmentsClient.unenrollUserFromCourse(userId, courseId);
                dispatch(unenrollFromCourse(courseId));
            } else {
                await enrollmentsClient.enrollUserInCourse(userId, courseId);
                dispatch(enrollInCourse(courseId));
            }
        } catch (err) {
            console.error("Enrollment action failed:", err);
        }
    };

    return (
        <div className="container mt-4">
            <h3>Course Enrollments</h3>
            <ul className="list-group">
                {courses.map((course: any) => (
                    <li key={course._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{course.name} ({course.number})</span>
                        <button
                            className={`btn ${enrolledCourseIds.includes(course._id) ? "btn-danger" : "btn-success"}`}
                            onClick={() => toggleEnrollment(course._id)}
                        >
                            {enrolledCourseIds.includes(course._id) ? "Unenroll" : "Enroll"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
