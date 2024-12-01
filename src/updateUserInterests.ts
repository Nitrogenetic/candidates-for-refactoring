// В модуле, где используется updateUserFields:
if (isLoggedIn()) {
  updateUserFields(handle);
} else {
  toLoginPage();
}

function updateUserFields(fields) {
  const token = getToken();
  const headers = getHeaders(token);
  const body = JSON.stringify(fields);

  return putUsersHandle(headers, body);
}

// В модуле api
function putUsersHandle(headers, body) {
  return fetch(`${domain}/v1/users/handle`, {
    method: 'PUT',
    headers,
    body,
  });
}

// Было плохо:
// 1) В названии метода и модуля ничего не сказано, что мы
// должны редиректить пользователя на страницу авторизации, если он не авторизован.
// 2) В функциях присутствует логическое НЕ, что визуально усложняет восприятие.
// 3) Функции очень похожи, что нарушает принцип DRY.
// 4) Функции выполняют сразу несколько операций, нарушая принцип:
// "одна функция, одно действие".

/** Стало лучше:
 * 1) Проверка на авторизацию и редирект были помещены на уровень,             | 1
 * где вызывается метод обновления полей юзера.
 * 2) Условие было вынесено на уровень выше. Туда,                             | 2
 * где вызывается функция обновления полей.
 * 3) Удалено дублирование.                                                    | 8; 17;
 * 4) Функции были разбиты на более абстрактные, которые выполняют 1 действие. | 8; 17;
 */
