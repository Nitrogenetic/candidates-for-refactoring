interface Modem {
  connect: (connectionLocator: string) => boolean;
  disconnect: () => boolean;
  send: (information: string) => boolean;
  recv: () => string;
  getConnectedLocator: () => string;
}

// Было плохо:
// 1) Названия методов интерфейса менее абстрактные чем сам интерфейс.
// Т.е. они на разных уровнях абстракции.
// 2) Не ясно что означает параметр "c" в методе send.

/** Стало лучше:
 * 1) Изменены названия методов на более абстрактные.               | 2; 6;
 * 2) Было подобрано абстрактное название аргумента (information).  | 4
 */
