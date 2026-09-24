from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Meeting(Base):
    __tablename__ = "meetings"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        autoincrement=True
    )

    date: Mapped[str] = mapped_column(String(10))

    time: Mapped[str] = mapped_column(String(5))

    type: Mapped[str] = mapped_column(String(20))

    choice: Mapped[str] = mapped_column(String(255))