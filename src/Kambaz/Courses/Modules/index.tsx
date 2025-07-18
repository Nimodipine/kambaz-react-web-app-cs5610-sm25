import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";


export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div>
      <div>
        {/* Top controls section */}
        <div>
          <ModulesControls />
          <br /><br /><br /><br />
        </div>

        {/* Course Modules */}
        <div>
          {/* Week 1 */}
          <ListGroup className="rounded-0 wd-modules">
            {modules
              .filter((module: any) => module.course === cid)
              .map((module: any) => (
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border border-secondary">
                  <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                    <span><BsGripVertical className="me-2 fs-3" /> {module.name}</span>
                    <ModuleControlButtons />
                  </div>
                  {module.lessons && (

                    <ListGroup className="wd-lessons rounded-0">
                      {module.lessons.map((lesson: any) => (

                        <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                          <span><BsGripVertical className="me-2 fs-3" />{lesson.name} </span>
                          <LessonControlButtons />
                        </ListGroup.Item>
                      ))}</ListGroup>)}</ListGroup.Item>))}</ListGroup>
        </div>
      </div>
    </div>
  );
}
