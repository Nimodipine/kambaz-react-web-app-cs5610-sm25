import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    enrollInCourse,
    unenrollFromCourse,
    setEnrolledCourses
} from "./reducer";

// Use the same clients as Dashboard - this ensures consistency!
import * as userClient from "../../Account/client";    // Same as Dashboard
import * as coursesClient from "../client";            // Same as Dashboard

export default function EnrollmentsScreen() {
    const account = useSelector((state: any) => state.accountReducer.currentUser);
    const userId = account?._id;

    const dispatch = useDispatch();

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

                // Use the same API as Dashboard
                const userEnrollments = await userClient.findMyCourses();
                console.log("User enrollments:", userEnrollments);

                // Extract course IDs from enrollment data
                const enrolledIds = userEnrollments
                    .filter(Boolean) // Remove null values
                    .map((course: any) =>
                        typeof course === "string" ? course : course._id
                    );

                setCourses(allCourses);
                dispatch(setEnrolledCourses(enrolledIds));
            } catch (err) {
                console.error("Failed to load courses or enrollments:", err);
            }
        };

        loadData();
    }, [userId, dispatch]);

    const toggleEnrollment = async (courseId: string) => {
        try {
            console.log(`Attempting to ${enrolledCourseIds.includes(courseId) ? 'unenroll from' : 'enroll in'} course:`, courseId);

            if (enrolledCourseIds.includes(courseId)) {
                // Use the same API calls as Dashboard
                await userClient.unenrollFromCourse(userId, courseId);
                dispatch(unenrollFromCourse(courseId));
                console.log('Successfully unenrolled from course:', courseId);
            } else {
                await userClient.enrollIntoCourse(userId, courseId);
                dispatch(enrollInCourse(courseId));
                console.log('Successfully enrolled in course:', courseId);
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