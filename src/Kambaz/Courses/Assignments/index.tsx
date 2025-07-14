import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import PlusControlButtons from "./PlusControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      <div>
        <ListGroup className="rounded-0 wd-assignment">
          {/* Assignment Title */}
          <ListGroup.Item className="wd-assignments-title p-0">
            <div className="wd-title p-3 ps-2 fs-4 bg-secondary d-flex align-items-center justify-content-between">
              <span><BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS</span>
              <div className="d-flex align-items-center gap-2">
                <span className="badge rounded-pill text-dark fs-6 wd-assignment-pill">40% of Total</span>
                <button>+</button>
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="wd-assignment-list-item p-3">
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <BsGripVertical className="fs-3 mb-1" />
              </div>

              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <MdOutlineAssignment className="fs-4 icon-green" />
              </div>

              {/* Center: title and description stacked */}
              <div className="flex-grow-1">
                <Link
                  to="/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link fw-bold text-dark fs-5"
                >
                  A1
                </Link>
                <div className="wd-assignment-description">
                  <span className="text-danger">Multiple Modules</span> |
                  <strong> Not available until</strong> May 6 at 12:00am<br />
                  <strong>Due</strong> May 13 at 11:59pm | 100pts
                </div>
              </div>

              {/* Right side: controls */}
              <div className="text-end">
                <br />
                <PlusControlButtons />
              </div>
            </div>
          </ListGroup.Item>


          {/* Assignment Items */}
          <ListGroup.Item className="wd-assignment-list-item p-3">
            <div className="d-flex justify-content-between align-items-start">
              {/* Left side: grip + file icons */}
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <BsGripVertical className="fs-3 mb-1" />
              </div>
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <MdOutlineAssignment className="fs-4 icon-green" />
              </div>
              {/* Center: title and description stacked */}
              <div className="flex-grow-1">
                <Link
                  to="/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link fw-bold text-dark fs-5"
                >
                  A2
                </Link>
                <div className="wd-assignment-description">
                  <span className="text-danger">Multiple Modules</span> |
                  <strong> Not available until</strong> May 6 at 12:00am<br />
                  <strong>Due</strong> May 13 at 11:59pm | 100pts
                </div>
              </div>

              {/* Right side: controls */}
              <div className="text-end">
                <br />
                <PlusControlButtons />
              </div>
            </div>
          </ListGroup.Item>

          {/* Assignment Items */}
          <ListGroup.Item className="wd-assignment-list-item p-3">
            <div className="d-flex justify-content-between align-items-start">
              {/* Left side: grip + file icons */}
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <BsGripVertical className="fs-3 mb-1" />
              </div>
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <MdOutlineAssignment className="fs-4 icon-green" />
              </div>
              {/* Center: title and description stacked */}
              <div className="flex-grow-1">
                <Link
                  to="/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link fw-bold text-dark fs-5"
                >
                  A3
                </Link>
                <div className="wd-assignment-description">
                  <span className="text-danger">Multiple Modules</span> |
                  <strong> Not available until</strong> May 6 at 12:00am<br />
                  <strong>Due</strong> May 13 at 11:59pm | 100pts
                </div>
              </div>
              {/* Right side: controls */}
              <div className="text-end">
                <br />
                <PlusControlButtons />
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>

        {/* Quizzes Table */}
        <ListGroup className="rounded-0 wd-assignment mt-5">
          <ListGroup.Item className="wd-assignments-title p-0">
            <div className="wd-title p-3 ps-2 fs-4 bg-secondary d-flex align-items-center justify-content-between">
              <span><BsGripVertical className="me-2 fs-3" /> Quizzes</span>
              <div className="d-flex align-items-center gap-2">
                <span className="badge rounded-pill text-dark fs-6 wd-assignment-pill">10% of Total</span>
                <button>+</button>
              </div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="wd-assignment-list-item p-3">
            <div className="d-flex justify-content-between align-items-start">
              {/* Left: Icons */}
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <BsGripVertical className="fs-3 mb-1" />
              </div>
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <MdOutlineAssignment className="fs-4 icon-green" />
              </div>
              {/* Center: Title and Description */}
              <div className="flex-grow-1">
                <Link
                  to="/Kambaz/Courses/1234/Assignments/301"
                  className="wd-assignment-link fw-bold text-dark fs-5"
                >
                  Q1
                </Link>
                <div className="wd-assignment-description">
                  <strong>Not available until</strong> May 13 9pm |
                  <strong> Due</strong> May 20 at 8:59pm |
                  -/29 pts
                </div>
              </div>
              {/* Right: Optional Control Buttons */}
              <div className="text-end">
                <br />
                <PlusControlButtons />
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>

        {/* Exams Table */}
        <ListGroup className="rounded-0 wd-assignment mt-5">
          <ListGroup.Item className="wd-assignments-title p-0">
            <div className="wd-title p-3 ps-2 fs-4 bg-secondary d-flex align-items-center justify-content-between">
              <span><BsGripVertical className="me-2 fs-3" /> EXAMS</span>
              <div className="d-flex align-items-center gap-2">
                <span className="badge rounded-pill text-dark fs-6 wd-assignment-pill">20% of Total</span>
                <button>+</button>
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="wd-assignment-list-item p-3">
            <div className="d-flex justify-content-between align-items-start">
              {/* Left: Icons */}
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <BsGripVertical className="fs-3 mb-1" />
              </div>
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <MdOutlineAssignment className="fs-4 icon-green" />
              </div>

              {/* Center: Title and Description */}
              <div className="flex-grow-1">
                <Link
                  to="/Kambaz/Courses/1234/Assignments/301"
                  className="wd-assignment-link fw-bold text-dark fs-5"
                >
                  Midterm Exam
                </Link>
                <div className="wd-assignment-description">
                  <strong>Not available until</strong> May 13 9pm |
                  <strong> Due</strong> May 20 at 8:59pm |
                  -/100 pts
                </div>
              </div>

              {/* Right: Optional Control Buttons */}
              <div className="text-end">
                <br />
                <PlusControlButtons />
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>


        {/* PROJECT Table */}
        <ListGroup className="rounded-0 wd-assignment mt-5">
          <ListGroup.Item className="wd-assignments-title p-0">
            <div className="wd-title p-3 ps-2 fs-4 bg-secondary d-flex align-items-center justify-content-between">
              <span><BsGripVertical className="me-2 fs-3" /> PROJECT</span>
              <div className="d-flex align-items-center gap-2">
                <span className="badge rounded-pill text-dark fs-6 wd-assignment-pill">30% of Total</span>
                <button>+</button>
              </div>
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="wd-assignment-list-item p-3">
            <div className="d-flex justify-content-between align-items-start">
              {/* Left: Icons */}
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <BsGripVertical className="fs-3 mb-1" />
              </div>
              <div className="d-flex flex-column align-items-center me-2">
                <br />
                <MdOutlineAssignment className="fs-4 icon-green" />
              </div>

              {/* Center: Title and Description */}
              <div className="flex-grow-1">
                <Link
                  to="/Kambaz/Courses/1234/Assignments/301"
                  className="wd-assignment-link fw-bold text-dark fs-5"
                >
                  Final Project
                </Link>
                <div className="wd-assignment-description">
                  <strong> Due</strong> May 12, 2025 |
                  -/100 pts
                </div>
              </div>
              {/* Right: Optional Control Buttons */}
              <div className="text-end">
                <br />
                <PlusControlButtons />
              </div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

