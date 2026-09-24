import { useNavigate } from "react-router-dom";
import { useMeeting } from "../context/MeetingContext";

function Summary() {
  const navigate = useNavigate();

  const { meeting } = useMeeting();

  function handleConfirm() {
    navigate("/final");
  }

  function formatDate(date) {
    if (!date) {
      return "";
    }

    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
  }

  return (
    <main className="page">
      <div className="card">
        <div className="heart">❤️</div>

        <h1>Nosso encontro</h1>

        <p>
          Confira se está tudo certinho 😊
        </p>

        <div className="summary">
          <div className="summary-item">
            <span>📅</span>

            <div>
              <strong>Data</strong>
              <p>{formatDate(meeting.date)}</p>
            </div>
          </div>

          <div className="summary-item">
            <span>🕐</span>

            <div>
              <strong>Horário</strong>
              <p>{meeting.time}</p>
            </div>
          </div>

          <div className="summary-item">
            <span>
              {meeting.type === "ver" ? "👫" : "🍽️"}
            </span>

            <div>
              <strong>Tipo de encontro</strong>

              <p>
                {meeting.type === "ver"
                  ? "Sair para se ver"
                  : "Sair para comer"}
              </p>
            </div>
          </div>

          <div className="summary-item">
            <span>
              {meeting.type === "ver" ? "📍" : "🍕"}
            </span>

            <div>
              <strong>
                {meeting.type === "ver"
                  ? "Lugar"
                  : "Escolha"}
              </strong>

              <p>{meeting.choice}</p>
            </div>
          </div>
        </div>

        <button
          className="continue-button"
          onClick={handleConfirm}
        >
          ESTÁ TUDO CERTO ❤️
        </button>
      </div>
    </main>
  );
}

export default Summary;