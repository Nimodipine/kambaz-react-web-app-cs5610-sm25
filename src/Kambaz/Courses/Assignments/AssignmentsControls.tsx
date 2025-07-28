import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function AssignmentsControls({ handleAdd }: { handleAdd: () => void }) {
    return (
        <div id="wd-assignments" className="d-flex justify-content-between align-items-center mb-3">
            {/* Search input on the left */}
            <input
                placeholder="🔍 Search..."
                id="wd-search-assignment"
                className="form-control w-50"
            />

            {/* Buttons on the right */}
            <div className="d-flex gap-2">
                <Button
                    variant="secondary"
                    id="wd-add-assignment-group"
                >
                    + Group
                </Button>
                <Button variant="danger" size="lg" onClick={handleAdd} id="wd-add-assignment-btn">
                    <FaPlus className="me-2" />
                    Assignment
                </Button>
            </div>
        </div>
    );
}
