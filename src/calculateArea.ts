enum ShapeType {
  Circle,
  Square,
}

const calculateCircleArea = (radius: number): number => {
  return Math.PI * Math.pow(radius, 2);
};

const calculateSquareArea = (side: number): number => {
  return Math.pow(side, 2);
};

console.log(calculateCircleArea(5)); // Output: 78.54

// Было плохо:
// Функция пытается выполнить несколько действий сразу.
// Нужно стараться как можно реже использовать switch/case
// (в данном случае switch/case усложняет восприятие).

/** Стало лучше:
 * 1) Лучше разбить функцию на 2, чтобы соблюсти правила:                   | 6; 10;
 * "как можно меньше аргументов", "функция должна быть простой",
 * "функия должна выполнять 1 действие: то, которое указано в ее названии".
 */
