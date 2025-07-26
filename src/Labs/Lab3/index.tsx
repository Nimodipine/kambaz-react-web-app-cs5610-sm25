import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import Destructing from "./Destructing";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import House from "./House";
import IfElse from "./IfElse";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import VariablesAndConstants
  from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import ConditionalOutputInline from "./ConditionalOutputInline";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ForLoops from "./ForLoops";
import FilterFunction from "./FilterFunction";
import FunctionDestructing from "./FunctionDestructing";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todos);
  return (
    <div>
      <h2>Lab 3</h2>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroup.Item key={todo.id}>
            {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />

      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <JsonStringify />
      <House />
      <TodoItem />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <Classes />
      <Styles />
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>
      <hr />
      <PathParameters />

      <hr />
    </div>
  );
}
