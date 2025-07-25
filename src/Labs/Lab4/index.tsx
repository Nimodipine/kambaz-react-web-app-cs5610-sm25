import ClickEvent from "./ClickEvent";
import Counter from "./counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";


export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div id="wd-passing-functions">
            <h2>Lab 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <ReduxExamples />
        </div>
    );
}
