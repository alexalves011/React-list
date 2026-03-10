import { useState } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { SubHeading } from "./components/SubHeading";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { TextInput } from "./components/TextInput";
import { Button } from "./components/Button";
import { TodoForm } from "./components/ToDoForm";

/* const todos = [
  {
    id: 1,
    description: "JSX e componentes",
    completed: false,
    createdAt: "2022-10-31",
  },
  {
    id: 2,
    description: "Props, state e hooks",
    completed: false,
    createdAt: "2022-10-31",
  },
  {
    id: 3,
    description: "Ciclo de vida dos componentes",
    completed: false,
    createdAt: "2022-10-31",
  },
  {
    id: 4,
    description: "Testes unitários com Jest",
    completed: false,
    createdAt: "2022-10-31",
  },
]; */
/* const completed = [
  {
    id: 5,
    description: "Controle de inputs e formulários controlados",
    completed: true,
    createdAt: "2022-10-31",
  },
  {
    id: 6,
    description: "Rotas dinâmicas",
    completed: true,
    createdAt: "2022-10-31",
  },
]; */

function App() {
  {
    /*cria a variavel showDialog que começa como false ou seja fechada*/
  }
  const [showDialog, setShowDialog] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Controle de inputs e formulários controlados",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Rotas dinâmicas",
      completed: true,
      createdAt: "2022-10-31",
    },
  ]);

  const toggleDialog = () => {
    setShowDialog(!showDialog);

    {
      /*essa função inverte o valor (de false para true).*/
    }
  };

  {
    /*O Re-render: Como o estado mudou, o React executa a função App() novamente.*/
  }

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

    toggleDialog();
  };


  const toggleTodoCompleted = (todo) => {
    setTodos(prevState => {
      return prevState.map(t => {
        if(t.id == todo.id){
          return{
            ...t,
            completed: !t.completed
          }
        }
        return t
      })
    })


  }
  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos
              .filter((t) => !t.completed)
              .map(function (t) {
                return <ToDoItem key={t.id} item={t} onToggleCompleted={toggleTodoCompleted} />;
              })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos
              .filter((t) => t.completed)
              .map(function (t) {
                return <ToDoItem key={t.id} item={t} onToggleCompleted={toggleTodoCompleted} />;
              })}
          </ToDoList>
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <TodoForm onSubmit={addTodo} />
            </Dialog>
            {/* o botão executaa função toggleDialog*/}
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
