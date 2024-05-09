import { useState } from "react";

export default function Player({ initialName = "Player", symbol }) {
  const [playerName, setPlayerName] = useState(initialName || "");
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((wasEditing) => !wasEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

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
            onChange={handleChange}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
