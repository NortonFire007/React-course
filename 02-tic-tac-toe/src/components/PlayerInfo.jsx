import { useState } from 'react';

const PlayerInfo = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdtitClick = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChangeName = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChangeName}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdtitClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
};

export default PlayerInfo;
