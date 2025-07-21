import { Form, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import assignments from "../../Database/assignments.json";

export default function AssignmentEditor() {
  const { cid, assignmentId } = useParams();
  const assignment = assignments.find(a => a.id === assignmentId);
  if (!assignment) return <div>Assignment not found</div>;

  console.log("assignmentId from URL:", assignmentId);
  console.log("assignment IDs in JSON:", assignments.map(a => a.id));

  return (
    <div id="wd-assignments-editor" className="p-3">
      {/* Assignment Name */}
      <Form.Group className="mb-3" controlId="wd-name" style={{ maxWidth: '600px' }}>
        <Form.Label style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
          Assignment Name
        </Form.Label>
        <Form.Control type="text" defaultValue={assignment.title} />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-4" controlId="wd-description" style={{ maxWidth: '600px' }}>
        <Form.Control as="textarea" rows={8} defaultValue={assignment.context} />
      </Form.Group>

      <Form style={{ maxWidth: '600px' }}>
        <Form.Group as={Row} className="mb-3" controlId="wd-points">
          <Form.Label column sm={4} className="text-end fw-bold">
            Points</Form.Label>
          <Col sm={8}>
            <Form.Control type="number" defaultValue={assignment.points} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-group">
          <Form.Label column sm={4} className="text-end fw-bold">
            Assignment Group</Form.Label>
          <Col sm={8}>
            <Form.Select>
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-display-grade-as">
          <Form.Label column sm={4} className="text-end fw-bold">
            Display Grade as</Form.Label>
          <Col sm={8}>
            <Form.Select>
              <option>Percentage</option>
              <option>Complete/Incomplete</option>
              <option>Points</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
          <Form.Label column sm={4} className="text-end fw-bold">
            Submission Type
          </Form.Label>

          <Col sm={8}>
            <div className="wd-box p-3 border rounded bg-white">
              <Form.Select className="mb-2">
                <option>Online</option>
                <option>No Submission</option>
              </Form.Select>

              <div className="mb-2">Online Entry Options</div>
              <Form.Check type="checkbox" label="Text Entry" id="wd-text-entry" />
              <Form.Check type="checkbox" label="Website URL" id="wd-website-url" />
              <Form.Check type="checkbox" label="Media Recordings" id="wd-media-recordings" />
              <Form.Check type="checkbox" label="Student Annotation" id="wd-student-annotation" />
              <Form.Check type="checkbox" label="File Uploads" id="wd-file-upload" />
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-assign">
          <Form.Label column sm={4} className="text-end fw-bold">
            Assign
          </Form.Label>

          <Col sm={8}>
            <div className="wd-box p-3 border rounded bg-white">
              <Form.Label className="fw-normal">Assign To</Form.Label>
              <Form.Control type="text" defaultValue="Everyone" className="mb-3" />

              <Form.Label className="fw-normal">Due</Form.Label>
              <Form.Control type="date" defaultValue={assignment.dueDate}
                className="mb-3" />

              <Row className="g-3">
                <Col md={6}>
                  <Form.Label className="fw-normal">Available From</Form.Label>
                  <Form.Control type="date" defaultValue={assignment.availableDate} />
                </Col>
                <Col md={6}>
                  <Form.Label className="fw-normal">Until</Form.Label>
                  <Form.Control type="date" defaultValue={assignment.untilDate} />
                </Col>
              </Row>
            </div>
          </Col>
        </Form.Group>
      </Form>

      {/* Buttons below the Assign section */}
      <div className="d-flex justify-content-end gap-2 mt-4" style={{ maxWidth: '600px' }}>
        <Link
          id="wd-cancel-btn"
          to={`/Kambaz/Courses/${cid}/Assignments`}
          className="btn btn-light"
        >
          Cancel
        </Link>
        <Link
          id="wd-save-btn"
          to={`/Kambaz/Courses/${cid}/Assignments`}
          className="btn btn-danger"
        >
          Save
        </Link>
      </div>

    </div>

  );
}
