import { useState } from 'react';

const PlayerInfo = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdtitClick = () => {
    setIsEditing((editing) => !editing);
    // setIsEditing(!isEditing); - it is bad practise
    // Example: isEditing = true
    // setIsEditing(!isEditing); expexted=false  real-false  |  setIsEditing((editing) => !editing);   expexted=false  real-false
    // setIsEditing(!isEditing); expexted=true  real-false   |  setIsEditing((editing) => !editing);    expexted=true  real-true
  };

  const handleChangeName = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li>
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
