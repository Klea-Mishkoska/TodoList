import React from 'react';
//import components
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        text={todo.text}
                        todo={todo}
                        key={todo.id} />
                ))}
            {/*    we put {}so that we can use js here and map method*/}
            {/*    we use the id so react knows which one got deleted and what to display*/}
            </ul>
        </div>
    );
};

export default TodoList;