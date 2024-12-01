const ADULT_AGE = 18;
const LOAN_APPROVE_MAX_AGE = 65;

const isUserCanTakeLoan = (user) => {
  const { age, employmentStatus, criminalRecord } = user;

  const isSuitableAge = age >= ADULT_AGE && age <= LOAN_APPROVE_MAX_AGE;
  const isEmployed = employmentStatus === 'employed';
  const isNoCriminal = criminalRecord === false;

  return isSuitableAge && isEmployed && isNoCriminal;
};

if (isUserCanTakeLoan(user)) {
  approveLoan();
}

// Было плохо:
// 1 Магические числа 18 и 65. Не ясно, что они означают.
// 2 user неплохо было бы деструктуризировать, чтобы уменьшить количество повторяемого "user.".
// 3 Слишком длинное условие в конструкции if. Приходится вчитываться, чтобы его понять.

/** Стало лучше:
 * 1 Числа были вынесены в константы, чтобы повысить понимание их значений.  | 1
 * 2 Из user были получены необходимые свойства.                             | 5
 * 3 Условие было вынесено в отдельную функцию, название функции подскажет   | 14
 * читателю кода, какое именно условие соблюдается.
 */
