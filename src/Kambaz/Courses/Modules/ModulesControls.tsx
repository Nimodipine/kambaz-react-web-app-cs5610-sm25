import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import Unpublishmark from "./Unpublishmark";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";

export default function ModulesControls(
    { moduleName, setModuleName, addModule }:
        { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            {/* Add Module button */}
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </Button>

            <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
                moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />

            {/* Dropdown */}
            <Dropdown className="float-end me-2">
                <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
                    <GreenCheckmark /> Publish All
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item id="wd-publish-all">
                        <GreenCheckmark /> Publish All
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-publish-all-modules-and-items">
                        <GreenCheckmark /> Publish all modules and items
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-publish-modules-only">
                        <GreenCheckmark /> Publish modules only
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-unpublish-all-modules-and-items">
                        <Unpublishmark /> Unpublish all modules and items
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-unpublish-modules-only">
                        <Unpublishmark /> Unpublish modules only
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* View Progress button */}
            <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-view-progress">
                View Progress
            </Button>

            {/* Collapse All button */}
            <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-collapse-all">
                Collapse All
            </Button>

        </div>
    );
}
