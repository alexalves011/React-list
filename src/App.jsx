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


  const toggleDialog = () => {
    setShowDialog(!showDialog);

    {
      /*essa função inverte o valor (de false para true).*/
    }
  };

  {
    /*O Re-render: Como o estado mudou, o React executa a função App() novamente.*/
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
          {/* <TodoGroup
            heading="Para estudar"
              items={todos.filter(t => !t.completed)}
              onToggleCompleted={toggleTodoCompleted}
              onDeleteTodo={deleteTodo}
            />

          <TodoGroup
              heading="Concluído"
              items={todos.filter(t => t.completed)}
              onToggleCompleted={toggleTodoCompleted}
              onDeleteTodo={deleteTodo}
            /> 

          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos
              .filter((t) => !t.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    onToggleCompleted={toggleTodoCompleted}
                    onDeleteTodo={deleteTodo}
                  />
                );
              })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos
              .filter((t) => t.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    onToggleCompleted={toggleTodoCompleted}
                    onDeleteTodo={deleteTodo}
                  />
                );
              })}
          </ToDoList>
          */}
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              {/*  <TodoForm onSubmit={addTodo} /> */}
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
