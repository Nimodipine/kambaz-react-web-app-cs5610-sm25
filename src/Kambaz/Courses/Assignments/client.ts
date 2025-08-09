import axios from "axios";

const ASSIGNMENTS_API =
    `${import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000"}/api/assignments`;

export interface AssignmentUI {
    id: string;
    title: string;
    category: string;
    points: number;
    available?: string;
    availableDate?: string; // YYYY-MM-DD for inputs
    due?: string;
    dueDate?: string;
    untilDate?: string;
    description?: string;
    context?: string;
    percent?: string;
    link?: string;
    courses: string[];
}

type AssignmentAPI = {
    _id: string;
    title: string;
    category: string;
    points: number;
    available?: string;
    availableDate?: string | Date;
    due?: string;
    dueDate?: string | Date;
    untilDate?: string | Date;
    description?: string;
    context?: string;
    percent?: string;
    link?: string;
    courses: string[];
};

const axiosWithCredentials = axios.create({ withCredentials: true });

const toYMD = (d?: string | Date | null) =>
    d ? new Date(d).toISOString().slice(0, 10) : "";

const toApi = (a: AssignmentUI): AssignmentAPI => ({
    _id: a.id,
    title: a.title,
    category: a.category,
    points: a.points,
    available: a.available,
    availableDate: a.availableDate ? new Date(a.availableDate) : undefined,
    due: a.due,
    dueDate: a.dueDate ? new Date(a.dueDate) : undefined,
    untilDate: a.untilDate ? new Date(a.untilDate) : undefined,
    description: a.description,
    context: a.context,
    percent: a.percent,
    link: a.link,
    courses: a.courses ?? [],
});

const fromApi = (a: AssignmentAPI): AssignmentUI => ({
    id: a._id,
    title: a.title,
    category: a.category,
    points: a.points,
    available: a.available ?? "",
    availableDate: toYMD(a.availableDate),
    due: a.due ?? "",
    dueDate: toYMD(a.dueDate),
    untilDate: toYMD(a.untilDate),
    description: a.description ?? "",
    context: a.context ?? "",
    percent: a.percent ?? "10%",
    link: a.link ?? `Assignments/${(a._id || "").slice(0, 6)}`,
    courses: a.courses ?? [],
});

export const findAssignmentsForCourse = async (cid: string): Promise<AssignmentUI[]> => {
    try {
        const { data } = await axiosWithCredentials.get<AssignmentAPI[]>(ASSIGNMENTS_API, {
            params: { course: cid },
        });
        return data.map(fromApi);
    } catch {
        const { data } = await axiosWithCredentials.get<AssignmentAPI[]>(ASSIGNMENTS_API);
        return data.map(fromApi).filter((a) => a.courses?.includes(cid));
    }
};

export const findAssignmentById = async (id: string): Promise<AssignmentUI> => {
    const { data } = await axiosWithCredentials.get<AssignmentAPI>(
        `${ASSIGNMENTS_API}/${id}`
    );
    return fromApi(data);
};

export const createAssignment = async (assignment: AssignmentUI): Promise<AssignmentUI> => {
    const { data } = await axiosWithCredentials.post<AssignmentAPI>(
        ASSIGNMENTS_API,
        toApi(assignment)
    );
    return fromApi(data);
};

export const updateAssignment = async (assignment: AssignmentUI): Promise<AssignmentUI> => {
    const { data } = await axiosWithCredentials.put<AssignmentAPI>(
        `${ASSIGNMENTS_API}/${assignment.id}`,
        toApi(assignment)
    );
    return fromApi(data);
};

export const deleteAssignment = async (id: string): Promise<void> => {
    await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${id}`);
};
