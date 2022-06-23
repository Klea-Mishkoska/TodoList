import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    //events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        })
        );
    };
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            {/*we use the {} so that we can type js `` and $ so that if the todo is completed then the style is frrom the completed class if not then we dont add anything just ''...*/}
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}



export default Todo;