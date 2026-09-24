import { createContext, useContext, useState } from "react";

const MeetingContext = createContext();

export function MeetingProvider({ children }) {
  const [meeting, setMeeting] = useState({
    accepted: true,
    date: "",
    time: "",
    type: "",
    choice: "",
  });

  function updateMeeting(data) {
    setMeeting((previousMeeting) => ({
      ...previousMeeting,
      ...data,
    }));
  }

  return (
    <MeetingContext.Provider
      value={{
        meeting,
        updateMeeting,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
}

export function useMeeting() {
  return useContext(MeetingContext);
}