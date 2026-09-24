const API_URL = "http://127.0.0.1:8000";

export async function createMeeting(meeting) {
  const response = await fetch(`${API_URL}/encontros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: meeting.date,
      time: meeting.time,
      type: meeting.type,
      choice: meeting.choice,
    }),
  });

  if (!response.ok) {
    throw new Error("Não foi possível salvar o encontro.");
  }

  return response.json();
}