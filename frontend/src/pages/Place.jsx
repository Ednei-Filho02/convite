import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMeeting } from "../context/MeetingContext";

function Places() {
  const navigate = useNavigate();

  const { updateMeeting } = useMeeting();

  const [selectedPlace, setSelectedPlace] = useState("");
  const [otherPlace, setOtherPlace] = useState("");

  const places = [
    {
      id: "praca",
      name: "Praça",
      emoji: "🌳",
    },
    {
      id: "parque",
      name: "Parque",
      emoji: "🌿",
    },
    {
      id: "cinema",
      name: "Cinema",
      emoji: "🎬",
    },
    {
      id: "shopping",
      name: "Shopping",
      emoji: "🛍️",
    },
    {
      id: "outro",
      name: "Outro lugar",
      emoji: "📍",
    },
  ];

  function handleSelection(place) {
    setSelectedPlace(place);

    if (place !== "Outro lugar") {
      updateMeeting({
        choice: place,
      });

      navigate("/resumo");
    }
  }

  function handleOtherPlace() {
    if (!otherPlace.trim()) {
      alert("Digite qual lugar você gostaria ❤️");
      return;
    }

    updateMeeting({
      choice: otherPlace,
    });

    navigate("/resumo");
  }

  return (
    <main className="page">
      <div className="card">
        <div className="heart">📍</div>

        <h1>Onde vamos nos encontrar?</h1>

        <p>
          Escolha um lugar para nosso encontro ❤️
        </p>

        <div className="choice-buttons">
          {places.map((place) => (
            <button
              key={place.id}
              className="choice-button"
              onClick={() => handleSelection(place.name)}
            >
              <span>{place.emoji}</span>

              <span>{place.name}</span>
            </button>
          ))}
        </div>

        {selectedPlace === "Outro lugar" && (
          <div className="other-food">
            <label htmlFor="otherPlace">
              Qual lugar você gostaria?
            </label>

            <input
              id="otherPlace"
              type="text"
              placeholder="Ex: Um café"
              value={otherPlace}
              onChange={(event) => setOtherPlace(event.target.value)}
            />

            <button
              className="continue-button"
              onClick={handleOtherPlace}
            >
              CONTINUAR ❤️
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Places;