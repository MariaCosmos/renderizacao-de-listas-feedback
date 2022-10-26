import React from "react";
import { TarefaConcluida } from './styled'

export default function ListaTarefasCompletas(props){
  const listaConcluida = [...props.listaConcluida]
  console.log(listaConcluida)

  return(
    <div>
      <ul>
        {listaConcluida.map((tarefa, index) => {
          return (
            <TarefaConcluida key={index}>
              <p>{tarefa}</p>
            </TarefaConcluida>
          );
        })}
      </ul>
    </div>
  )
}

