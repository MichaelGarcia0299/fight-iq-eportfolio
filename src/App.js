import React from "react";
import BoxerCard from "./components/BoxerCard";
import FighterForm from "./components/FighterForm";
import MotivationQuote from "./components/MotivationQuote";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>🥊 Fight IQ: Fighter Stat Tracker</h1>

      <section>
        <h2>Featured Fighter</h2>
        <div className="boxer-container">
          <BoxerCard
            name="Mike 'Iron' Tyson"
            wins={50}
            losses={7}
            avatar="https://deadline.com/wp-content/uploads/2024/11/Mike-Tyson-Jake-Paul-Netflix-2185060193.jpg"
            color="#f2f2f2"
          />
        </div>
      </section>

      <section>
        <FighterForm />
      </section>

      <section>
        <MotivationQuote />
      </section>
    </div>
  );
}

export default App;
