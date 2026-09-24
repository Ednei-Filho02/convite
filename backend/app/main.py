from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.database import Base, engine, get_db
from app.models import Meeting
from app.schemas import MeetingCreate


Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def root():
    return {
        "message": "API do Projeto Encontro funcionando ❤️"
    }


@app.post("/encontros")
def create_meeting(
    meeting: MeetingCreate,
    db: Session = Depends(get_db)
):
    db_meeting = Meeting(
        date=meeting.date,
        time=meeting.time,
        type=meeting.type,
        choice=meeting.choice
    )

    db.add(db_meeting)
    db.commit()
    db.refresh(db_meeting)

    return {
        "message": "Encontro salvo com sucesso ❤️",
        "meeting": {
            "id": db_meeting.id,
            "date": db_meeting.date,
            "time": db_meeting.time,
            "type": db_meeting.type,
            "choice": db_meeting.choice
        }
    }