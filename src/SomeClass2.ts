class SomeClass2 {
  constructor() {
    console.log('Constructor is unnecessary if not initializing anything');
  }

  public someMethod(): void {
    console.log('This method performs a useful action');
  }
}

// Было плохо:
// 1) Неиспользуемые переменные лучше сразу удалять.
// Восстановить их можно с помощью системы контроля версий,
// если требуется. Они никуда не пропадут

/** Стало лучше:
 * 1) Удалена неиспользуемая переменная.    | 0 (removed)
 */
