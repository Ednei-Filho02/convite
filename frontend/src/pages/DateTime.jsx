import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMeeting } from "../context/MeetingContext";

function DateTime() {
  const navigate = useNavigate();

  const { meeting, updateMeeting } = useMeeting();

  const [date, setDate] = useState(meeting.date);
  const [time, setTime] = useState(meeting.time);

  function handleContinue() {
    if (!date || !time) {
      alert("Escolha uma data e um horário ❤️");
      return;
    }

    updateMeeting({
      date,
      time,
    });

    navigate("/tipo");
  }

  return (
    <main className="page">
      <div className="card">
        <div className="heart">📅</div>

        <h1>Quando você está livre?</h1>

        <p>
          Escolha um dia e um horário para nosso encontro ❤️
        </p>

        <div className="form">
          <label htmlFor="date">
            Data
          </label>

          <input
            id="date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />

          <label htmlFor="time">
            Horário
          </label>

          <input
            id="time"
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>

        <button
          className="continue-button"
          onClick={handleContinue}
        >
          CONTINUAR ❤️
        </button>
      </div>
    </main>
  );
}

export default DateTime;