class LessLoadedClass1 {
  field1: number;
  field2: string;
  // ... другие поля и методы
}

class LessLoadedClass2 {
  field3: boolean;
  field4: Date;
  // ... другие поля и методы
}

class LessLoadedClass3 {
  field5: number;
  field6: number;
  field7: number;
  // ... другие поля и методы
}

class LessLoadedClass4 {
  field8: number;
  field9: number;
  field10: number;
  // ... другие поля и методы
}

// Было плохо:
// 1) Класс слишком сильно перегружен. Вероятно, он нарушает принцип Разделения Интерфейсов.
// Его поля методы словно хотят быть в разных классах.

/** Стало лучше:
 * 1) Класс разбит на классы, каждый из которых направлен решение одной проблемы. | 13
 */
