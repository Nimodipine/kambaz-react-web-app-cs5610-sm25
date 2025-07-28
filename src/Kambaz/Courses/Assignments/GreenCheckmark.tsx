import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
    return (
        <span>
            <FaCheckCircle className="text-success me-2 fs-5" style={{ verticalAlign: "middle" }} />
            <FaCircle className="text-white fs-5" style={{ verticalAlign: "middle", position: "relative", top: "-2px" }} />
        </span>
    );
}