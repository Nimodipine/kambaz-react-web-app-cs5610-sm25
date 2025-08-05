import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrolledCourseIds: [] as string[],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrolledCourses: (state, action) => {
            state.enrolledCourseIds = action.payload;
        },
        enrollInCourse: (state, action) => {
            state.enrolledCourseIds.push(action.payload);
        },
        unenrollFromCourse: (state, action) => {
            state.enrolledCourseIds = state.enrolledCourseIds.filter(
                (id) => id !== action.payload
            );
        },
    },
});

export const {
    setEnrolledCourses,
    enrollInCourse,
    unenrollFromCourse,
} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
