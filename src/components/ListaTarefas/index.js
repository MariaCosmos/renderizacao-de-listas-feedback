import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import ListaTarefasCompletas from "../ListaTarefasCompletas/ListaTarefasCompletas";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const [listaConcluida, setListaConcluida] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    setListaConcluida([...listaConcluida, tarefa])
    console.log(listaConcluida)
  };

  function teclaEspaco(event){
    if(event.key === 'Enter'){
      const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
    }
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={(event) => teclaEspaco(event)}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
        <ListaTarefasCompletas lista={lista} listaConcluida={listaConcluida}/>
      </ListaContainer>
      <LinhaHorizontal/>
    </ListaTarefasContainer>
  );
}
