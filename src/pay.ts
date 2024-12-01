const pay = () => {
  for (let e of employees) {
    payIfNecessary(e);
  }
};

function payIfNecessary(employee) {
  if (employee.isPayday()) {
    deliverPayToEmployee(employee);
  }
}

function deliverPayToEmployee(employee) {
  const pay = employee.calculatePay();
  employee.deliverPay(pay);
}

// Было плохо:
// 1) Функция выполняет несколько действий сразу.

/** Стало лучше:
 * 1) Функция разбита на 3, каждая из которых выполняет 1 действие. | 9; 13;
 */
