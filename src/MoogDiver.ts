class MoogDiver {
  gradient: Gradient;
  splines: List<Spline>;

  public dive(reason: string) {
    const gradient = this.saturateGradient();

    const splines = this.reticulateSplines(gradient);

    if (reason === 'ok') {
      this.diveForOkMoog(splines);
    } else {
      this.diveForNotOkMoog(splines);
    }
  }

  private saturateGradient(): Gradient {
    const gradient: Gradient; // some logic
    return gradient;
  }

  private reticulateSplines(gradient: Gradient): List<Spline> {
    // some logic
    return gradient.getSplines();
  }

  private diveForOkMoog(splines: List<Spline>) {
    // some logic
    splines.doOk();
  }

  private diveForNotOkMoog(splines: List<Spline>) {
    // some logic
    splines.doNotOk();
  }
}

// Было плохо:
// 1) Порядок вызова методов в dive важен, а код не обеспечивает принудительной привязки,
// из-за этого другой разработчик может вызвать метод отдельно от привязки.
// 2) diveForMoog выполняет слишком много действий (//some logic и опциональный вызов методов).

/** Стало лучше:
 * 1) Реализована передача результата в аргументы другой функции для повышения связи.     | 8; 11; 13
 * 2) Вместо передачи 2 аргументов, реализовано 2 метода, которые вызываются опционально. | 11, 13
 */
