import React from "react";

function BoxerCard({ name, wins, losses, avatar, color, onDelete }) {
  const cardStyle = {
    backgroundColor: color,
    padding: "1rem",
    margin: "1rem",
    borderRadius: "12px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  };

  return (
    <div style={cardStyle}>
      <img src={avatar} alt={name} width="100" />
      <h3>{name}</h3>
      <p>Wins: {wins}</p>
      <p>Losses: {losses}</p>
      {onDelete && (
        <button onClick={onDelete} style={{ marginTop: "10px", backgroundColor: "red" }}>
          Delete
        </button>
      )}
    </div>
  );
}

export default BoxerCard;
