import { useState } from "react";
import { FormControl } from "react-bootstrap";


const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");

    return (
        <div>
            <h3>Query Parameters</h3>
            <FormControl className="mb-2" id="wd-path-parameter-a"
                type="number" defaultValue={a}
                onChange={(e) => setA(e.target.value)} />
            <FormControl className="mb-2" id="wd-path-parameter-b"
                type="number" defaultValue={b}
                onChange={(e) => setB(e.target.value)} />


            <a
                className="btn btn-primary me-2"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Add {a} + {b}
            </a>

            <a
                className="btn btn-danger me-2"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Subtract {a} - {b}
            </a>

            <a
                className="btn btn-success me-2"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Multiply {a} * {b}
            </a>

            <a
                className="btn btn-dark"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Divide {a} / {b}
            </a>

            <hr />
        </div>
    );
}
