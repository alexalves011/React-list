import TodoContext from "./TodoContext";
import { useEffect, useState } from "react";

const TODOS = 'todos';

export function TodoProvider({ children }) {

const saveTodos = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(saveTodos ? JSON.parse(saveTodos) : []); // se tiver algo no localStorage, use ele, senao use um array vazio 
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  const openFormTodoDialog = (todo) => {
    if(todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };
  
  
  useEffect(() => {

    localStorage.setItem(TODOS, JSON.stringify(todos));
    
    }, [todos]); // fazer um efeito toda vez que alguem alterar a array de todos

  const addTodo = (formData) => {
    const description = formData.get("description");

    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

 

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
        
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
