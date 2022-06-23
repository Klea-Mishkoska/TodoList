import React, {useState, useEffect} from "react";
//usestate is so thaat we can import something specific from the react library
//in this case that is usestate
import './App.css';
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import todo from "./Components/Todo";

function App() {
    const [inputText, setInputText] = useState('');
    //we have empty pair of strings here so that when we hit enter, the input stays
    // clear and empty
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState ('all');
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status])

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

  //  Save to local
    const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
    };
    const getLocalTodos = () => {
        if(localStorage.getItem('todos') ===null){
            localStorage.setItem('todos', JSON.stringify([]));
        }else {
          let todoLocal =  JSON.parse(localStorage.getItem('todos'));
          setTodos(todoLocal);
        }
    };

  //  here in the initial state we put [] because we will have array of objects here
  //  the inputtext is the initial value, the setinputtext is a function that
  //   allows us to change the initial value
  //  we put the state here up, so that we can pass it down in the form and in todo, and also use it in other components,we can only pass state and props downwards, not upwards
  return (
    <div className="App">
        {/*we say classname because class is used in js */}
        <header>
            <h1>Klea's Todo List</h1>
        </header>
        <Form
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            setStatus={setStatus}
        />
        {/*we pass it here in props, then we import it in the form component so we*/}
        {/*can use it*/}
        <TodoList setTodos={setTodos}
                  todos={todos}
                  filteredTodos = {filteredTodos}
        />

    </div>
  );
}

export default App;
