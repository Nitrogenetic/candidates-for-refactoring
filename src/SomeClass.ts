class SomeClass {
  public someMethod() {
      try {
          this.doSomethingSafe();
      } catch (Exception e) {
          e.printStackTrace();
      }
  }

  private doSomethingSafe() {
     console.log('Safe operation')
  }
}

// Было плохо:
// 1) Невызываемые и неиспользуемые функции должны быть удалены.
// Система контроля версий позаботится о восстановлении, если необходимо.

/** Стало лучше:
 * 1) Удалены неиспользуемые функции.    | 0 (removed)
 */


