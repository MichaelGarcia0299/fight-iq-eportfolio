import React, { useState } from "react";
import BoxerCard from "./BoxerCard";

function FighterForm() {
  const [fighters, setFighters] = useState([]);
  const [name, setName] = useState("");
  const [wins, setWins] = useState("");
  const [losses, setLosses] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleAddFighter = () => {
    if (name && wins && losses && avatar) {
      const newFighter = {
        id: Date.now(), // unique key
        name,
        wins: parseInt(wins),
        losses: parseInt(losses),
        avatar,
        color: "#f9f9f9"
      };
      setFighters([...fighters, newFighter]);
      setName("");
      setWins("");
      setLosses("");
      setAvatar("");
    }
  };

  const handleDeleteFighter = (id) => {
    setFighters(fighters.filter((f) => f.id !== id));
  };

  return (
    <div>
      <h2>Add a Fighter</h2>
      <input
        type="text"
        placeholder="Fighter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Wins"
        value={wins}
        onChange={(e) => setWins(e.target.value)}
      />
      <input
        type="number"
        placeholder="Losses"
        value={losses}
        onChange={(e) => setLosses(e.target.value)}
      />
      <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <button onClick={handleAddFighter}>Add Fighter</button>

      <div className="boxer-container">
        {fighters.map((f) => (
          <BoxerCard
            key={f.id}
            name={f.name}
            wins={f.wins}
            losses={f.losses}
            avatar={f.avatar}
            color={f.color}
            onDelete={() => handleDeleteFighter(f.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FighterForm;
