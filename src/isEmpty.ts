if (isFilled(list)) {
  // код, если список не пуст
}

// Было плохо:
// 1) Отрицательных условий стоит избегать.
// Логическое НЕ визуально усложняет восприятие.

/** Стало лучше:
 * 1) Стоит описать метод isFilled (или просто выполнить проверку list.length). | 1
 */
