import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import * as coursesClient from "./Courses/client";
import * as userClient from "./Account/client";
import * as enrollmentsClient from "./Courses/Enrollments/client";

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState({ name: "", description: "" });
  const [enrolling, setEnrolling] = useState(false);
  const [userEnrollments, setUserEnrollments] = useState<string[]>([]);

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  console.log("Current user:", currentUser);

  // Fetch user enrollments
  const fetchUserEnrollments = async () => {
    if (currentUser?._id) {
      try {
        const enrollments = await enrollmentsClient.getUserEnrollments(currentUser._id);
        setUserEnrollments(enrollments);
      } catch (error) {
        console.error("Failed to fetch user enrollments:", error);
        setUserEnrollments([]);
      }
    }
  };

  // Fetch courses based on enrolling state
  const fetchCourses = async () => {
    try {
      if (enrolling) {
        // Fetch all courses and mark which ones user is enrolled in
        const allCourses = await coursesClient.fetchAllCourses();
        const coursesWithEnrollment = allCourses.map((course: { _id: string; }) => ({
          ...course,
          enrolled: userEnrollments.includes(course._id)
        }));
        setCourses(coursesWithEnrollment);
      } else {
        // Fetch only user's enrolled courses
        const myCourses = await userClient.findMyCourses();
        setCourses(myCourses);
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
      setCourses([]);
    }
  };

  // Handle enrollment/unenrollment
  const updateEnrollment = async (courseId: string, enroll: boolean) => {
    if (!currentUser?._id) return;

    try {
      if (enroll) {
        await enrollmentsClient.enrollUserInCourse(currentUser._id, courseId);
      } else {
        await enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId);
      }

      // Refresh enrollments and courses
      await fetchUserEnrollments();
      await fetchCourses();
    } catch (error) {
      console.error("Failed to update enrollment:", error);
    }
  };

  // Handle course deletion
  const deleteCourse = async (courseId: string) => {
    try {
      await coursesClient.deleteCourse(courseId);
      // Refresh courses after deletion
      await fetchCourses();
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

  // Handle adding new course
  const addNewCourse = async () => {
    if (!course.name.trim()) return;

    try {
      await coursesClient.createCourse(course);
      setCourse({ name: "", description: "" });
      await fetchCourses();
    } catch (error) {
      console.error("Failed to create course:", error);
    }
  };

  // Handle updating existing course
  const updateCourse = async () => {
    if (!course.name.trim()) return;

    try {
      await coursesClient.updateCourse(course);
      setCourse({ name: "", description: "" });
      await fetchCourses();
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };

  // Fetch user enrollments when component mounts or user changes
  useEffect(() => {
    fetchUserEnrollments();
  }, [currentUser]);

  // Fetch courses when enrolling state changes or user enrollments change
  useEffect(() => {
    fetchCourses();
  }, [enrolling, userEnrollments]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1> <hr />

      {/* Only show course creation form when not in enrolling mode */}
      {!enrolling && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" onClick={addNewCourse} id="wd-add-new-course-click">
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <FormControl
            as="textarea"
            rows={3}
            value={course.description}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            placeholder="Course Description"
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {enrolling ? "Available Courses" : "Published Courses"} ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((c: any): c is any => !!c && !!c._id)
            .map((course) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
                <Card>
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img src={course.image} variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {enrolling && (
                          <button onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                            className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                        {course.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </Card.Text>
                      <Button variant="primary">Go</Button>

                      {/* Only show Edit and Delete buttons when not in enrolling mode */}
                      {!enrolling && (
                        <>
                          <button
                            onClick={async (event) => {
                              event.preventDefault();
                              // Only delete the course from database, don't unenroll users first
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}