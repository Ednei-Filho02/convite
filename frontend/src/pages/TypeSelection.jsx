import { useNavigate } from "react-router-dom";
import { useMeeting } from "../context/MeetingContext";

function TypeSelection() {
  const navigate = useNavigate();

  const { meeting, updateMeeting } = useMeeting();

  function handleSelection(type) {
    updateMeeting({
      type,
      choice: "",
    });

    if (type === "ver") {
      navigate("/lugares");
    }

    if (type === "comer") {
      navigate("/comidas");
    }
  }

  return (
    <main className="page">
      <div className="card">
        <div className="heart">❤️</div>

        <h1>O que vamos fazer?</h1>

        <p>
          Agora escolha o tipo do nosso encontro 😊
        </p>

        <div className="choice-buttons">
          <button
            className="choice-button"
            onClick={() => handleSelection("ver")}
          >
            👫
            <span>Sair para se ver</span>
          </button>

          <button
            className="choice-button"
            onClick={() => handleSelection("comer")}
          >
            🍕
            <span>Sair para comer</span>
          </button>
        </div>

        {meeting.type && (
          <p className="selected-message">
            Escolha uma opção acima ❤️
          </p>
        )}
      </div>
    </main>
  );
}

export default TypeSelection;