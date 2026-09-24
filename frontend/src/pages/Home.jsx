import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [isEscaping, setIsEscaping] = useState(false);

  const [noButtonPosition, setNoButtonPosition] = useState({
    x: 0,
    y: 0,
  });

  const [noAttempts, setNoAttempts] = useState(0);

  function handleYes() {
    navigate("/data");
  }

  function moveNoButton() {
    const buttonWidth = 120;
    const buttonHeight = 50;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setIsEscaping(true);

    setNoAttempts((previousAttempts) => previousAttempts + 1);

    setNoButtonPosition({
      x: randomX,
      y: randomY,
    });
  }

  function getNoButtonText() {
    if (noAttempts === 0) {
      return "NÃO 😈";
    }

    if (noAttempts === 1) {
      return "Tem certeza? 🤨";
    }

    if (noAttempts === 2) {
      return "Pensa melhor 😂";
    }

    if (noAttempts === 3) {
      return "Não adianta fugir! ❤️";
    }

    return "Você sabe que quer SIM 😏";
  }

  return (
    <main className="home">
      <div className="card">
        <div className="heart">❤️</div>

        <h1>Você aceita sair comigo?</h1>

        <p>
          Mas pensa com carinho... rsrs
        </p>

        <div className="buttons">
          <button
            className="yes-button"
            onClick={handleYes}
          >
            SIM ❤️
          </button>

          <button
            className={`no-button ${
              isEscaping ? "escaping" : ""
            }`}
            style={
              isEscaping
                ? {
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                  }
                : {}
            }
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
          >
            {getNoButtonText()}
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;