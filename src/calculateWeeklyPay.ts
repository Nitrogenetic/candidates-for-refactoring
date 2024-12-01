function calculateWeeklyPay(): number {
  const overTime = Math.max(0, getTenthsWorked() - getStraightTime());
  return calculateStraightPay() + calculateOvertimePay(overTime);
}

function getStraightTime() {
  const MAX_POSSIBLE_STRAIGHT_TIME = 400;
  return Math.min(MAX_POSSIBLE_STRAIGHT_TIME, getTenthsWorked());
}

function calculateStraightPay(): number {
  return getTenthRate() * getStraightTime();
}

function calculateOvertimePay(overTime: number): number {
  const OVER_TIME_BONUS = 1.5;
  return Math.round(overTime * OVER_TIME_BONUS);
}

// 1) Функции выглядит громоздкой и запутанной.
// 2) Присутствуют магические числа. Непонятно почему 400 и 1.5.
// 3) Передавать флаги в функцию не стоит (флаг overtime). Это заставляет
// читателя кода гадать, что занчит переданный флаг.

/**
 * 1) Функция декомпозирована на более мелкие.                                                    | 6; 11; 15;
 * 2) Магические числа заменены на константы.                                                     | 7; 16;
 * 3) Вместо передачи флагов, лучше вызывать необходимые методы в зависимости от условий.         | 3
 * Но в данном случае можно обойтись и без условий, потому что:
 *    а) Если флаг overtime === false, то overTime = tenthsWorked - straightTime = 0.
 *    (исходя из логики, что все рабочее время без оверов === отработаным в основное время часам)
 *    б) Значит если overtime === true, то overtimeRate всегда равно 1.5.
 */
