import { motion } from "framer-motion";
import { useMeeting } from "../context/MeetingContext";

function Success() {
  const { meeting } = useMeeting();

  function formatDate(date) {
    if (!date) {
      return "";
    }

    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
  }

  return (
    <main className="page success-page">
      <motion.div
        className="card success-card"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="success-heart"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
          }}
        >
          ❤️
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Você aceitou! 🥰
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Obrigado por aceitar sair comigo!
        </motion.p>

        <motion.div
          className="final-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>
            Nosso encontro está marcado para:
          </p>

          <strong>
            📅 {formatDate(meeting.date)}
          </strong>

          <strong>
            🕐 {meeting.time}
          </strong>

          <p>
            Mal posso esperar para te ver! ❤️
          </p>
        </motion.div>

        <motion.div
          className="hearts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          ❤️ 💕 ❤️ 💕 ❤️
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Success;