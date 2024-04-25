import PlayerInfo from './components/PlayerInfo';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo initialName="Player1" symbol="X" />
          <PlayerInfo initialName="Player2" symbol="0" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
