if (shouldBeDeleted(timer)) {
}

// Было плохо:
// 1) В логике условной конструкции достаточно сложно разобраться.

/** Стало лучше
 * 1) В коде Была выделена функция, объясняющая намерения условной конструкции. | 1
 */
