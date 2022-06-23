import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    //here i can write js code and functions
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed:false, id: Math.random()*1000 }
        //  spread todos so if i have some todos in the list just pass it, and if
        //     case we have new ones {}
        ])

    //we do prevent default so that we prevent it from acting default, which is
    //     refreshing the page everytime we submit the input
        setInputText('');
    //    so that the input text doesnt appear after submitting it and the input field resets
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    
    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"/>
            {/*on change-so everytime the input changes this function will be ran*/}
            {/*we put a value so that it will update with the state on the user interface, on the screen */}
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;