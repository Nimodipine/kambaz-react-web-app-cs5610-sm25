import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};

const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_API}`);
    return response.data;
};
export const updateTitle = async (title: string) => {
    const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
    return response.data;
};

export const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    return response.data;
};
export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
};
export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};

export const updateTodo = async (todo: any) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
};

export const deleteTodo = async (todo: any) => {
    const response = await axios.delete(`/lab5/todos/${todo.id}`);
    return response.data;
};
