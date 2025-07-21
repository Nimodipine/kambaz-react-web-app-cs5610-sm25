import { useParams, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { MdOutlineAssignment } from 'react-icons/md';
import PlusControlButtons from "./PlusControlButtons";
import HeaderControlButtons from "./HeaderControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import assignmentsData from "../../Database/assignments.json";

// Define the Assignment interface to match your JSON structure
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
}


export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();

  if (!cid) {
    return <div>Course ID not found</div>;
  }

  const assignments = assignmentsData.filter(a => a.courses?.includes(cid));

  const grouped: Record<string, Assignment[]> = assignments.reduce(
    (acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, Assignment[]>
  );

  return (
    <div>
      <AssignmentsControls />

      {Object.entries(grouped).map(([category, items]) => (
        <ListGroup className="rounded-0 wd-assignment mt-5" key={category}>
          <ListGroup.Item className="wd-assignments-title p-0">
            <div className="wd-title p-3 ps-2 fs-4 bg-secondary d-flex justify-content-between align-items-center">
              <span><BsGripVertical className="me-2 fs-3" /> {category}</span>
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
                    to={`/Kambaz/Courses/${cid}/${item.link}`}
                    className="wd-assignment-link fw-bold text-dark fs-5"
                  >
                    {item.title}
                  </Link>
                  <div className="wd-assignment-description">
                    {item.description && <span className="text-danger">{item.description}</span>}
                    {item.available && <> | <strong>Not available until</strong> {item.available}</>}
                    {item.due && (
                      <div className="mt-0.5">
                        <strong>Due</strong> {item.due} | {item.points} pts
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-end">
                  <div className="mt-4" />
                  <PlusControlButtons />
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ))}
    </div>
  );
}