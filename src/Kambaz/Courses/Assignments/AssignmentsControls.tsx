import { Button } from "react-bootstrap";

export default function AssignmentsControls() {
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
                <Button
                    variant="danger"
                    id="wd-add-assignment"
                >
                    + Assignment
                </Button>
            </div>
        </div>
    );
}
