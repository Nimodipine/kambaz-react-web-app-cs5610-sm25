import { MdDoNotDisturb } from "react-icons/md";

export default function Unpublishmark() {
    return (
        <span className="me-1 position-relative">
            <MdDoNotDisturb style={{ top: "2px" }} className="text-secondary me-1 position-absolute fs-5" />
            <MdDoNotDisturb className="text-white me-1 fs-6" />
        </span>);
}