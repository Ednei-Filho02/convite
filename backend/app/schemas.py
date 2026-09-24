from pydantic import BaseModel


class MeetingCreate(BaseModel):
    date: str
    time: str
    type: str
    choice: str