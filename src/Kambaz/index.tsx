import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import EnrollmentsScreen from "./Courses/Enrollments";

import "./styles.css"
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "Description",
  });


  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const findCoursesForUser = async () => {
    try {
      console.log("=== DEBUG: findCoursesForUser ===");
      console.log("Current user:", currentUser);
      console.log("Current user ID:", currentUser?._id);

      if (!currentUser?._id) {
        console.log("No current user ID, skipping course fetch");
        return;
      }

      console.log("Calling userClient.findCoursesForUser with ID:", currentUser._id);
      const courses = await userClient.findMyCourses();
      console.log("Courses returned from API:", courses);
      console.log("Number of courses:", courses?.length);
      setCourses(courses);
    } catch (error) {
      console.error("Error in findCoursesForUser:", error)
    }
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      // Filter out null values from the API response
      const enrolledCourses = (await userClient.findMyCourses()).filter(Boolean);

      const enrolledIds = new Set(
        enrolledCourses.map((c: any) =>
          typeof c === "string"
            ? c
            : c._id ?? c.course?._id ?? c.course
        )
      );

      setCourses(
        allCourses.map((course: any) => ({
          ...course,
          enrolled: enrolledIds.has(course._id),
        }))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const addNewCourse = async () => {
    try {
      // This calls POST /api/users/current/courses
      // Server creates the course AND enrolls the current user
      const created = await userClient.createCourse(course);

      setCourses(prev => [...prev, { ...created, enrolled: true }])

      setCourse(created);
    } catch (err) {
      console.error("Failed to create & enroll in course:", err);
    }
  };


  const deleteCourse = async (courseId: any) => {
    const status = await courseClient.deleteCourse(courseId);
    console.log("Delete status:", status);
    if (status.acknowledged) {
      setCourses(courses.filter((course) => course._id !== courseId));
    }
  };



  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    }));
  };

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<ProtectedRoute>
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                enrolling={enrolling} setEnrolling={setEnrolling}
                updateEnrollment={updateEnrollment}
              />
            </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            } />
            <Route path="/Enrollments" element={
              <ProtectedRoute>
                <EnrollmentsScreen />
              </ProtectedRoute>
            } />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}

