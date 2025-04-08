import React, { useState } from "react";

const quotes = [
  "Float like a butterfly, sting like a bee.",
  "Champions aren’t made in the gyms. Champions are made from something they have deep inside them—a desire, a dream, a vision.",
  "It’s not about how hard you can hit, it’s about how hard you can get hit and keep moving forward.",
  "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.'"
];

function MotivationQuote() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Motivational Quote</h2>
      <p>"{quote}"</p>
      <button onClick={getRandomQuote}>Fire Me Up</button>
    </div>
  );
}

export default MotivationQuote;
