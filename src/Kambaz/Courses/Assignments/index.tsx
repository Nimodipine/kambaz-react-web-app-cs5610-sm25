import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ListGroup, Modal, Button } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { MdOutlineAssignment } from 'react-icons/md';
import PlusControlButtons from "./PlusControlButtons";
import HeaderControlButtons from "./HeaderControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer"; // Import the actual action

interface Assignment {
  id: string;
  title: string;
  category: string;
  points: number;
  available: string;
  due: string;
  description: string;
  percent: string;
  link: string;
  courses: string[];
}

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector((state: any) => state.assignmentReducer.assignments);

  // State for delete confirmation dialog
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<Assignment | null>(null);

  if (!cid) return <div>Course ID not found</div>;

  // Filter assignments for this course
  const courseAssignments = assignments.filter((a: Assignment) =>
    a.courses?.includes(cid)
  );

  // Group assignments by category
  const grouped: Record<string, Assignment[]> = courseAssignments.reduce(
    (acc: Record<string, Assignment[]>, item: Assignment) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  const handleAddAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/new`);
  };

  const handleDeleteClick = (assignment: Assignment) => {
    setAssignmentToDelete(assignment);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      // Use the correct Redux action from your reducer
      dispatch(deleteAssignment(assignmentToDelete.id));
    }
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  console.log('All assignments:', assignments);
  console.log('Course ID:', cid);
  console.log('Filtered assignments:', courseAssignments);
  console.log('Grouped assignments:', grouped);

  return (
    <div>
      <AssignmentsControls handleAdd={handleAddAssignment} />

      {Object.entries(grouped).map(([category, items]) => (
        <ListGroup className="rounded-0 wd-assignment mt-5" key={category}>
          <ListGroup.Item className="wd-assignments-title p-0">
            <div className="wd-title p-3 ps-2 fs-4 bg-secondary d-flex justify-content-between align-items-center">
              <span>
                <BsGripVertical className="me-2 fs-3" /> {category}
              </span>
              <div className="d-flex align-items-center gap-2">
                <span className="badge rounded-pill text-dark fs-6 wd-assignment-pill">
                  {items[0].percent} of Total
                </span>
                <HeaderControlButtons />
              </div>
            </div>
          </ListGroup.Item>

          {items.map((item: Assignment) => (
            <ListGroup.Item className="wd-assignment-list-item p-3" key={item.id}>
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex flex-column align-items-center me-2 mt-4">
                  <BsGripVertical className="fs-3 mb-1" />
                </div>
                <div className="d-flex flex-column align-items-center me-2 mt-4">
                  <MdOutlineAssignment className="fs-4 icon-green" />
                </div>
                <div className="flex-grow-1">
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${item.id}`}
                    className="wd-assignment-link fw-bold text-dark fs-5"
                  >
                    {item.title}
                  </Link>
                  <div className="wd-assignment-description">
                    {item.description && (
                      <span className="text-danger">{item.description}</span>
                    )}
                    {item.available && (
                      <>
                        {item.description && ' | '}
                        <strong>Not available until</strong> {item.available}
                      </>
                    )}
                    {item.due && (
                      <div className="mt-0.5">
                        <strong>Due</strong> {item.due} | {item.points} pts
                      </div>
                    )}
                    {!item.due && item.points > 0 && (
                      <div className="mt-0.5">
                        {item.points} pts
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-end">
                  <div className="mt-4" />
                  <PlusControlButtons onDelete={() => handleDeleteClick(item)} />
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ))}

      {/* Delete Confirmation Dialog */}
      <Modal show={showDeleteDialog} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to remove the assignment "{assignmentToDelete?.title}"?</p>
          <p className="text-muted">This action cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}