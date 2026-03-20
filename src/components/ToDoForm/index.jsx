import "./todo-form.style.css";
import { Button } from "../Button";
import { TextInput } from "../TextInput";

export function TodoForm({ onSubmit, defaultValue }) {
  return (
    <form onSubmit={onSubmit} className="todo-form">
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name="description"
        defaultValue={defaultValue}
      />
      <Button>Salvar item</Button>
    </form>
  );
}
