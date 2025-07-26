import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";

const store = configureStore({
    reducer: {
        hello: helloReducer,
        counter: counterReducer,
        add: addReducer,
    },
});
export default store;