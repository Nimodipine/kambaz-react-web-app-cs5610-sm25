import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import EnrollmentsScreen from "./Courses/Enrollments";

import "./styles.css"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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

  const [enrollments, setEnrollments] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);//may need to change to courseClient
    setCourses([...courses, newCourse]);

    const newEnrollment = {
      _id: uuidv4(),
      user: currentUser._id,
      course: newCourse._id,
    };
    setEnrollments([...enrollments, newEnrollment]);

    setCourse(newCourse); // Optional: reset form to the new course
  };

  const deleteCourse = async (courseId: any) => {
    const status = await courseClient.deleteCourse(courseId);
    if (status.acknowledged) {
      setCourses(courses.filter((course) => course._id !== courseId));
    }
  };
  console.log("Delete status:", status);


  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser?._id) return;
      try {
        const courses = await userClient.findMyCourses();
        setCourses(courses);

        const enrollments = await courseClient.fetchEnrollments();
        setEnrollments(enrollments);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      }
    };
    fetchData();
  }, [currentUser]);

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
                enrollments={enrollments}
                setEnrollments={setEnrollments}
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

