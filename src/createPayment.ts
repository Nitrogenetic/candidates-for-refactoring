const createTransaction = () => {
  const token = getUrl().slice();
  return system.createTransaction(token);
};

const setNewTransaction = () => {
  const transaction = createTransaction();
  transaction.setTransaction();
};

const createCardPayment = () => {
  const cardNumber = account.getCardNumber();
  userAccount.createCardPayment(cardNumber);
};

const postCardPaymentTransaction = () => {
  const cardPayment = createCardPayment();
  cardPayment.postTransactionToServer();
};

// Где-то на уровне isToken
if (isToken) {
  setNewTransaction();
} else {
  postCardPaymentTransaction();
}

// Было плохо:
// 1) В функции присутствуют транзитивные обращения.
// Их следует избегать, иначе методы будут жестко связаны.
// 2) Передача флага не рекомендуется, так как функция начинает
// выполнять сразу несколько действий.

/** Стало лучше:
 * 1) Создание объектов transaction и cardPayment было вынесено в отдельные функции. | 1; 6;
 * 2) Функция разбита на setNewTransaction и postCardPaymentTransaction,             | 11; 16;
 * которые выполняются в зависимости от условия.
 */
