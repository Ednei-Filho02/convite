import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMeeting } from "../context/MeetingContext";

function Foods() {
  const navigate = useNavigate();

  const { updateMeeting } = useMeeting();

  const [selectedFood, setSelectedFood] = useState("");
  const [otherFood, setOtherFood] = useState("");

  const foods = [
    {
      id: "pizza",
      name: "Pizza",
      emoji: "🍕",
    },
    {
      id: "lanche",
      name: "Lanche",
      emoji: "🍔",
    },
    {
      id: "pastel",
      name: "Pastel",
      emoji: "🥟",
    },
    {
      id: "espetinho",
      name: "Espetinho",
      emoji: "🍢",
    },
    {
      id: "outra",
      name: "Outra opção",
      emoji: "😋",
    },
  ];

  function handleSelection(food) {
    setSelectedFood(food);

    if (food !== "Outra opção") {
      updateMeeting({
        choice: food,
      });

      navigate("/resumo");
    }
  }

  function handleOtherFood() {
    if (!otherFood.trim()) {
      alert("Digite qual comida você gostaria ❤️");
      return;
    }

    updateMeeting({
      choice: otherFood,
    });

    navigate("/resumo");
  }

  return (
    <main className="page">
      <div className="card">
        <div className="heart">🍽️</div>

        <h1>O que vamos comer?</h1>

        <p>
          Escolha uma opção para nosso encontro ❤️
        </p>

        <div className="choice-buttons">
          {foods.map((food) => (
            <button
              key={food.id}
              className="choice-button"
              onClick={() => handleSelection(food.name)}
            >
              <span>{food.emoji}</span>

              <span>{food.name}</span>
            </button>
          ))}
        </div>

        {selectedFood === "Outra opção" && (
          <div className="other-food">
            <label htmlFor="otherFood">
              Qual opção você gostaria?
            </label>

            <input
              id="otherFood"
              type="text"
              placeholder="Ex: Açaí"
              value={otherFood}
              onChange={(event) => setOtherFood(event.target.value)}
            />

            <button
              className="continue-button"
              onClick={handleOtherFood}
            >
              CONTINUAR ❤️
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Foods;