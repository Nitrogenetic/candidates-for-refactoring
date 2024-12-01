const hasNotFoundStatus = (response: Response) => {
  return response.status === HttpStatusCode.NOT_FOUND_404;
};

const hasForbiddenStatus = (response: Response) => {
  return response.status === HttpStatusCode.FORBIDDEN_403;
};

const hasServiceUnavailableStatus = (response: Response) => {
  return response.status === HttpStatusCode.SERVICE_UNAVAILABLE_503;
};

// Было плохо:
// 1) Ошибка статуса 503 не вынесена в константу.
// Необходимо показать что означает число 503.

/** Стало лучше:
 * 1) Статус ошибки вынесен в константу. | 10
 */
