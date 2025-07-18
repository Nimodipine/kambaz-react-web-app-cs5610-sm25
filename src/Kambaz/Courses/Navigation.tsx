import { Link, useParams, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams(); // expects route like /Courses/:courseId/...
  const location = useLocation();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((linkName) => {
        const path = `/Kambaz/Courses/${cid}/${linkName}`;
        const isActive = location.pathname === path;

        return (
          <Link
            key={linkName}
            to={path}
            className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"
              }`}
            id={`wd-course-${linkName.toLowerCase()}-link`}
          >
            {linkName}
          </Link>
        );
      })}
    </div>
  );
}
