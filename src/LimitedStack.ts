interface IUnlimitedStack<T> {
  getPercentFull(): number;
}

class UnlimitedStack<T> implements IUnlimitedStack<T> {
  getPercentFull(): number {
    return 0;
  }
}

// Было плохо:
// 1) Уровень абстракции метода percentFull ниже, чем у методов pop и push.
// Рекомендуется держать методы классов/модулей на одном уровне абстракции.
// 2) В качестве имени метода рекомедуется выбирать глагол.

/** Стало лучше:
 * 1) Класс UnlimitedStack теперь содержит набор методов на одном уровне абстракции. | 6
 * 2) К имени метода добавлена приставка get, тк он что-то возвращает.               | 6
 */
