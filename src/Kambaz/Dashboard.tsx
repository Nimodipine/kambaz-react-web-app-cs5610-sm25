import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <h5>
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
                CS1234 React JS
              </Link>
            </h5>
            <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
            <Link to="/Kambaz/Courses/1234/Home">
              <button>Go</button>
            </Link>
          </div>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <img src="/images/nodejs.jpg" width={200} />
          <div>
            <h5>
              <Link to="/Kambaz/Courses/2345/Home" className="wd-dashboard-course-link">
                CS2345 Node.js
              </Link>
            </h5>
            <p className="wd-dashboard-course-title">Server-Side Programming</p>
            <Link to="/Kambaz/Courses/2345/Home">
              <button>Go</button>
            </Link>
          </div>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <img src="/images/SQL.jpg" width={200} />
          <div>
            <h5>
              <Link to="/Kambaz/Courses/3456/Home" className="wd-dashboard-course-link">
                CS3456 SQL
              </Link>
            </h5>
            <p className="wd-dashboard-course-title">Database and Data Science</p>
            <Link to="/Kambaz/Courses/3456/Home">
              <button>Go</button>
            </Link>
          </div>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <img src="/images/htmlcss.jpg" width={200} />
          <div>
            <h5>
              <Link to="/Kambaz/Courses/4567/Home" className="wd-dashboard-course-link">
                CS4567 HTML & CSS
              </Link>
            </h5>
            <p className="wd-dashboard-course-title">Frontend Web Design</p>
            <Link to="/Kambaz/Courses/4567/Home">
              <button>Go</button>
            </Link>
          </div>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <img src="/images/biology.jpg" width={200} />
          <div>
            <h5>
              <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
                BIO0001 Intro to Biology
              </Link>
            </h5>
            <p className="wd-dashboard-course-title">Fundaments to Biological Science</p>
            <Link to="/Kambaz/Courses/5678/Home">
              <button>Go</button>
            </Link>
          </div>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <img src="/images/cybersecurity.jpg" width={200} />
          <div>
            <h5>
              <Link to="/Kambaz/Courses/6789/Home" className="wd-dashboard-course-link">
                CS6789 Introduction to Cybersecurity
              </Link>
            </h5>
            <p className="wd-dashboard-course-title">Ethical Hacking for Beginners</p>
            <Link to="/Kambaz/Courses/6789/Home">
              <button>Go</button>
            </Link>
          </div>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <img src="/images/robot.jpg" width={200} />
          <div>
            <h5>
              <Link to="/Kambaz/Courses/7890/Home" className="wd-dashboard-course-link">
                CS7890 Robotics
              </Link>
            </h5>
            <p className="wd-dashboard-course-title">Introduction to Robotic Development</p>
            <Link to="/Kambaz/Courses/7890/Home">
              <button>Go</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
