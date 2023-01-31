import {
  Container,
  H1,
  Button,
  Img,
  InputLabel,
  Input,
  ContainerItens,
  User,
} from "./styles";

import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";
import { useRef, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function addNewUser() {
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ]);
  }

  function deleteUser(id) {
    const newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
  }

  return (
    <Container className="App">
      <Img src={People} alt="Logo imagem" />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" ref={inputName} />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" ref={inputAge} />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="Seta" src={Arrow} />{" "}
        </Button>

        <ul>
          {users.map(({ name, age, id }) => (
            <User key={id}>
              <p>{name}</p>
              <p>{age}</p>
              <button onClick={() => deleteUser(id)}>
                <img src={Trash} alt="Excluir" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
