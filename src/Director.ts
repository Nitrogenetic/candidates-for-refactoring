class Calendar {
  addEvent(event) {
    // some logic to add event
  }
}

class Director {
  scheduleMeeting(calendar, event) {
    calendar.addEvent(event);
  }
}

// Было плохо:
// 1) Класс Director нарушает принцип Разделения Интерфейсов,
// сохраняя и поле calendar которое к нему не относятся.

/** Стало лучше:
 * 1) Следует не сохранять поле calenar, но получать его в параметрах.  | 8
 */
