const REGION_CODE_FROM_TO = [0, 3];
const LOCALITY_CODE_FROM_TO = [3, 6];
const CITY_NUMBER_FROM = 6;

function formatPhoneNumber(number) {
  const regionCode = number.slice(...REGION_CODE_FROM_TO);
  const locationCode = number.slice(...LOCALITY_CODE_FROM_TO);
  const cityNumber = number.slice(CITY_NUMBER_FROM);

  return `(${regionCode}) ${locationCode}-${cityNumber}`;
}

// Было плохо:
// 1) Функция calculateTotalPrice логически не связана с модулем.
// Рассчет цены и форматирование номера телефона должны находиться
// в разных файлах/компонентах/классах.
// 2) Не совсем ясна логика разбиения номера телефона.

/** Стало лучше:
 * 1) Необходимо перенести calculateTotalPrice в другой файл/компонент/класс.       | 0 (removed)
 * 2) Добавление содержательных переменных поможет понять принцип разбиения номера. | 6; 7; 8;
 */
