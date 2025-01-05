import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "jfuhgfrfnie",
      name: "Hiago",
      age: 33,
      email: "hiago@gmail.com",
    },
    {
      id: "jfuhgfrfnieertr",
      name: "Luana",
      age: 345,
      email: "linda@gmail.com",
    },
  ];

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" name="nome" placeholder="Nome" />
        <input type="number" name="idade" placeholder="Idade" />
        <input type="email" name="email" placeholder="Email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => {
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      })}
    </div>
  );
}

export default Home;
