import "./App.css";
import AngelCard from "./components/AngelCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [cardImage, setCardImage] = useState(null);
  const backCardImage =
    "https://raw.githubusercontent.com/Bmarshall666/CardImages/refs/heads/main/Back%20Card.jpg";
  const [flipped, setFlipped] = useState(true);

  useEffect(() => {
    setCardImage(
      "https://raw.githubusercontent.com/Bmarshall666/CardImages/refs/heads/main/Back%20Card.jpg"
    );
  }, []);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * 11) + 1;
    const newCardImage = `https://raw.githubusercontent.com/Bmarshall666/CardImages/refs/heads/main/${randomIndex}.jpg`;

    setFlipped(!flipped);

    if (flipped === false) {
      setTimeout(() => {
        setCardImage(
          "https://raw.githubusercontent.com/Bmarshall666/CardImages/refs/heads/main/Back%20Card.jpg"
        );
      }, 300);
    } else {
      setCardImage(newCardImage);
    }
  };

  const handleRedirtect = () => {
    window.location.href = "https://angel-radiance.com/";
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="Home-Button" onClick={handleRedirtect}>
          <img className="Back-Arrow" src="BackArrow.svg" alt="Back Arrow" />
        </button>
        <AngelCard
          image={cardImage}
          backImage={backCardImage}
          flipped={flipped}
        />
        <button className="Pick-Button" onClick={handleClick}>
          Pick a Card!
        </button>
      </header>
    </div>
  );
}

export default App;
