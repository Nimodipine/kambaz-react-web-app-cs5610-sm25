import { Form, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import * as assignmentsClient from "./client";


interface Assignment {
  id: string;
  title: string;
  category: string;
  points: number;
  available: string;
  availableDate: string;
  due: string;
  dueDate: string;
  untilDate: string;
  description: string;
  context: string;
  percent: string;
  link: string;
  courses: string[];
}

export default function AssignmentEditor() {
  const params = useParams();
  const { cid } = params;

  // Handle the wildcard route parameter
  const wildcardParam = params['*'] || '';
  const assignmentId = wildcardParam === 'Assignments/new' ? 'new' : wildcardParam.replace('Assignments/', '');

  const navigate = useNavigate();
  const assignments = useSelector((state: any) => state.assignmentReducer.assignments);

  const isNew = assignmentId === "new";
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("");
  const [availableDate, setAvailableDate] = useState("");
  const [untilDate, setUntilDate] = useState("");
  const [category, setCategory] = useState("ASSIGNMENTS");


  useEffect(() => {
    if (!isNew) {
      const existing = assignments.find((a: Assignment) => a.id === assignmentId);
      if (existing) {
        setTitle(existing.title);
        setContext(existing.context);
        setPoints(existing.points);
        setDueDate(existing.dueDate);
        setAvailableDate(existing.availableDate);
        setUntilDate(existing.untilDate);
      }
    }
  }, [isNew, assignmentId, assignments]);

  const handleSave = () => {
    const formatDate = (dateString: string) => {
      const options: Intl.DateTimeFormatOptions = {
        month: "short", day: "numeric", hour: "numeric", minute: "2-digit",
        hour12: true,
      };
      const date = new Date(dateString);
      return date.toLocaleString("en-US", options).replace(',', '').replace(':00', ':00am');
    };

    // Validate required fields
    if (!title.trim()) {
      alert('Please enter an assignment title');
      return;
    }

    if (isNew) {
      const newId = uuidv4();
      const newAssignment: Assignment = {
        id: newId,
        title: title.trim(),
        context,
        points: points || 0,
        dueDate,
        availableDate,
        untilDate,
        category,
        percent: "10%",
        link: `Assignments/${newId.slice(0, 6)}`,
        description: "Multiple Modules",
        available: availableDate ? `${formatDate(availableDate)}` : "",
        due: dueDate ? `${formatDate(dueDate)}` : "",
        courses: [cid!],
      };

      console.log('Dispatching new assignment:', newAssignment);
      assignmentsClient.createAssignment(newAssignment)
        .then(() => {
          navigate(`/Kambaz/Courses/${cid}/Assignments`);
        })
        .catch((err) => {
          console.error("Failed to save assignment:", err);
        });
    } else {
      const updatedAssignment: Assignment = {
        id: assignmentId!,
        title: title.trim(),
        context,
        points,
        dueDate,
        availableDate,
        untilDate,
        category,
        percent: "10%",
        link: `Assignments/${assignmentId}`,
        description: "Multiple Modules",
        available: availableDate ? `${formatDate(availableDate)}` : "",
        due: dueDate ? `${formatDate(dueDate)}` : "",
        courses: [cid!],
      };

      console.log('Dispatching updated assignment:', updatedAssignment);
      assignmentsClient.updateAssignment(updatedAssignment)
        .then(() => {
          navigate(`/Kambaz/Courses/${cid}/Assignments`);
        })
        .catch((err) => {
          console.error("Failed to update assignment:", err);
        });

    }

    console.log('Navigating back to assignments page');
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      {/* Assignment Name */}
      <Form.Group className="mb-3" controlId="wd-name" style={{ maxWidth: '600px' }}>
        <Form.Label style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
          Assignment Name
        </Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-4" controlId="wd-description" style={{ maxWidth: '600px' }}>
        <Form.Control as="textarea" rows={8} value={context} onChange={(e) => setContext(e.target.value)} />
      </Form.Group>

      <Form style={{ maxWidth: '600px' }}>
        <Form.Group as={Row} className="mb-3" controlId="wd-points">
          <Form.Label column sm={4} className="text-end fw-bold">
            Points</Form.Label>
          <Col sm={8}>
            <Form.Control type="number" value={points} onChange={(e) => setPoints(Number(e.target.value))} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="wd-group">
          <Form.Label column sm={4} className="text-end fw-bold">
            Assignment Group</Form.Label>
          <Col sm={8}>
            <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
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
              <Form.Control type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

              <Row className="g-3">
                <Col md={6}>
                  <Form.Label className="fw-normal">Available From</Form.Label>
                  <Form.Control type="date" value={availableDate} onChange={(e) => setAvailableDate(e.target.value)} />
                </Col>
                <Col md={6}>
                  <Form.Label className="fw-normal">Until</Form.Label>
                  <Form.Control type="date" value={untilDate} onChange={(e) => setUntilDate(e.target.value)} />
                </Col>
              </Row>
            </div>
          </Col>
        </Form.Group>
      </Form>

      {/* Buttons below the Assign section */}
      <div className="d-flex justify-content-end gap-2 mt-4" style={{ maxWidth: '600px' }}>
        <button
          id="wd-cancel-btn"
          onClick={handleCancel}
          className="btn btn-light"
        >
          Cancel
        </button>
        <button
          id="wd-save-btn"
          onClick={(e) => {
            console.log('=== SAVE BUTTON CLICKED ===');
            console.log('Event:', e);
            console.log('Current form values:', {
              title,
              context,
              points,
              dueDate,
              availableDate,
              untilDate,
              isNew,
              assignmentId,
              cid
            });
            handleSave();
          }}
          className="btn btn-danger"
        >
          Save
        </button>
      </div>
    </div>
  );
}