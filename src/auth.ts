type TPayment = {
  amount: number;
  rcCode: number;
};

type TGatewayService = {
  sendAuth: (payment: TPayment) => number;
};

const auth = (payment: TPayment, gateway: TGatewayService) => {
  return gateway.sendAuth(payment);
};

// Где-то на уровне абстракции payment.
const rcCode = auth(payment, gateway);
payment.rcCode = rcCode;

// Было плохо:
// 1) Функция auth изменяет входной параметр, чего делать не рекомендуется.

/** Стало лучше:
 * 1) Лучше обновлять rcCode на уровне абстракции payment.  | 16
 */
