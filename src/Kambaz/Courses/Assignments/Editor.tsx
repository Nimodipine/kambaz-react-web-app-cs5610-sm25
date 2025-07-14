import { Form, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      {/* Assignment Name */}
      <Form.Group className="mb-3" controlId="wd-name" style={{ maxWidth: '600px' }}>
        <Form.Label style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
          Assignment Name
        </Form.Label>
        <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-4" controlId="wd-description" style={{ maxWidth: '600px' }}>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={4} defaultValue="The assignment is available online. Submit a link to the landing page of" />
      </Form.Group>

      <Form style={{ maxWidth: '600px' }}>
        <Form.Group as={Row} className="mb-3" controlId="wd-points">
          <Form.Label column sm={4} className="text-end fw-bold">
            Points</Form.Label>
          <Col sm={8}>
            <Form.Control type="number" defaultValue={100} />
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
            Submission Type</Form.Label>
          <Col sm={8}>
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
          </Col>
        </Form.Group>

        <hr />

        <Form.Group as={Row} className="mb-3" controlId="wd-assign-to">
          <Form.Label column sm={4} className="text-end fw-bold">
            Assign</Form.Label>
          <Col sm={8}>
            <Form.Label className="fw-normal">Assign To</Form.Label>
            <Form.Control type="text" defaultValue="Everyone" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-due-date">
          <Form.Label column sm={4}></Form.Label>
          <Col sm={8}>
            <Form.Label className="fw-normal">Due Date</Form.Label>
            <Form.Control type="date" defaultValue="2025-05-17" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-available-from">
          <Form.Label column sm={4}></Form.Label>
          <Col sm={8}>
            <Form.Label className="fw-normal">
              Available From</Form.Label>
            <Form.Control type="date" defaultValue="2025-05-06" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-available-until">
          <Form.Label column sm={4}></Form.Label>
          <Col sm={8}>
            <Form.Label className="fw-normal">Until</Form.Label>
            <Form.Control type="date" defaultValue="2025-05-31" />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
