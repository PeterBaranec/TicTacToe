import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName || "");
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((wasEditing) => !wasEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            initialName
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
