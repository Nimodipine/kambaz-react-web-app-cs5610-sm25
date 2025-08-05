import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

import { setModules, editModule, updateModule, deleteModule, addModule as addModuleAction } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModuleAction(module));
  };

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const handleAddModule = () => {
    if (!moduleName || !cid) {
      console.warn("Missing module name or course ID.");
      return;
    }
    dispatch(addModuleAction({ name: moduleName, course: cid }));
    setModuleName("");
  };

  return (
    <div>
      <div>
        {/* Top controls section */}
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={handleAddModule}
        />

        <br /><br /><br /><br />
      </div>

      {/* Course Modules */}
      <div>
        <ListGroup className="rounded-0 wd-modules">
          {modules
            .map((module: any) => (
              <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border border-secondary" key={module._id}>
                <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                  <span>
                    <BsGripVertical className="me-2 fs-3" />
                    {!module.editing && module.name}
                    {module.editing && (
                      <FormControl
                        className="w-50 d-inline-block"
                        onChange={(e) =>
                          dispatch(updateModule({ ...module, name: e.target.value }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            saveModule({ ...module, editing: false });
                          }
                        }}
                        defaultValue={module.name}
                      />
                    )}
                  </span>
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => removeModule(moduleId)}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                </div>

                {module.lessons && (
                  <ListGroup className="wd-lessons rounded-0">
                    {module.lessons.map((lesson: any) => (
                      <ListGroup.Item
                        key={lesson._id}
                        className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
                      >
                        <span>
                          <BsGripVertical className="me-2 fs-3" />
                          {lesson.name}
                        </span>
                        <LessonControlButtons />
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>

      {/* Removed the duplicate ModuleEditor modal */}
    </div>
  );
}