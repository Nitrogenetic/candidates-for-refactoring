const render = (size: number) => {
  const html = new StringBuffer('<hr');

  if (size > 0) {
    html.append(getHrSize(size));
  }

  html.append('>');

  return html.toString();
};

const getHrSize = (size: number) => ` size="${size + 1}"`;

// Было плохо:
// 1) Методы создания тега и добавления аттрибута size - это разные уровни абстракции.

/** Стало лучше:
 * 1) Функция получения размера тега hr вынесена отдельно. | 13
 */
