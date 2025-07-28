import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            console.log('=== ADD ASSIGNMENT REDUCER ===');
            console.log('Received payload:', assignment);
            console.log('Current state.assignments length:', state.assignments.length);

            const newAssignment: any = {
                id: assignment.id,
                title: assignment.title || '',
                context: assignment.context || '',
                category: assignment.category || 'ASSIGNMENTS',
                points: assignment.points || 0,
                available: assignment.available || '',
                availableDate: assignment.availableDate || '',
                due: assignment.due || '',
                dueDate: assignment.dueDate || '',
                untilDate: assignment.untilDate || '',
                description: assignment.description || assignment.context || '',
                percent: assignment.percent || '0%',
                link: assignment.link || '',
                courses: assignment.courses || [],
            };
            console.log('Created new assignment:', newAssignment);

            state.assignments = [...state.assignments, newAssignment] as any;
            console.log('New state.assignments length:', state.assignments.length);
            console.log('Last assignment in array:', state.assignments[state.assignments.length - 1]);
            console.log('=== END ADD ASSIGNMENT REDUCER ===');
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a.id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a.id === assignment.id ? { ...a, ...assignment } : a
            ) as any;
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a.id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;