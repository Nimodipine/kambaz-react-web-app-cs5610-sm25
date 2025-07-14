import { IoEllipsisVertical } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
export default function PlusControlButtons() {
    return (
        <div className="float-end">
            <GoPlus />
            <IoEllipsisVertical className="fs-4" />
        </div>);
}