import { useState } from "react";
import Player from "./components";
import { players as data } from "./data/data";
import "./App.css";
import Add from "./components/addPlayer";

function App() {
  const [players, setPlayer] = useState(data);
  players.sort((player1, player2) => player2.score - player1.score);

  const incrementHandler = (name) => {
    const index = players.findIndex((player) => player.name === name);
    players[index].score = players[index].score + 1;
    players.sort((player1, player2) => player2.score - player1.score);
    setPlayer([...players]);
  };

  const decreaseHandler = (name) => {
    const index = players.findIndex((player) => player.name === name);
    players[index].score = players[index].score - 1;
    players.sort((player1, player2) => player2.score - player1.score);
    setPlayer([...players]);
  };
  const Del = (name) => {
    const index = players.findIndex((player) => player.name === name);
    console.log(index);
    players.splice(index, 1);
    console.log(players);
    setPlayer([...players]);
  };
  const addPlayer = () => {
    const addname = prompt("Enter Name");
    const addscore = parseInt(prompt("Enter Score"));
    players.push({ name: addname, score: addscore });
    setPlayer([...players]);
  };
  return (
    <div className="App">
      <Add add={addPlayer} />
      {players.map((player) => (
        <Player
          key={player.name}
          name={player.name}
          score={player.score}
          increment={incrementHandler}
          decrease={decreaseHandler}
          del={Del}
        />
      ))}
    </div>
  );
}

export default App;
