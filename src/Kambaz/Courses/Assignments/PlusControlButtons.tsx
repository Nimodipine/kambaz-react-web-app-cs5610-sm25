import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

interface PlusControlButtonsProps {
    onDelete?: () => void;
}

export default function PlusControlButtons({ onDelete }: PlusControlButtonsProps) {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <FaTrashAlt
                className="fs-5"
                style={{
                    verticalAlign: "middle",
                    cursor: "pointer",
                    color: "#dc3545"
                }}
                onClick={onDelete}
                title="Delete Assignment"
            />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}