import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-secondary">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} className="g-4">
          {/* Course 1 */}
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
                  <Card.Text style={{ height: "100px" }}>Full Stack software developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* Course 2 */}
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2345/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/nodejs.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS2345 Node JS</Card.Title>
                  <Card.Text style={{ height: "100px" }}>Server-side Programming</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* Course 3 */}
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3456/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/SQL.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS3456 SQL</Card.Title>
                  <Card.Text style={{ height: "100px" }}>Database and Data Science</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* Course 4 */}
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/4567/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/htmlcss.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS4567 HTML & CSS</Card.Title>
                  <Card.Text style={{ height: "100px" }}>Frontend Web Design</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* Course 5 */}
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/5678/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/biology.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">BI0001 Intro to Biology</Card.Title>
                  <Card.Text style={{ height: "100px" }}>Fundamentals to Biological Science</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* Course 6 */}
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/6789/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/cybersecurity.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS6789 Cybersecurity</Card.Title>
                  <Card.Text style={{ height: "100px" }}>Ethical Hacking for Beginners</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* Course 7 */}
          <Col className="wd-dashboard-course" style={{ width: "270px" }}>
            <Card>
              <Link to="/Kambaz/Courses/7890/Home" className="text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/robot.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">CS7890 Robotics</Card.Title>
                  <Card.Text style={{ height: "100px" }}>Introduction to Robotic Development</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

