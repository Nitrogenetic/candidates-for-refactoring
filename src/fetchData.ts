const DEFAULT_TIMEOUT = 5000;

function fetchData(url: string) {
  fetch(url, { timeout: DEFAULT_TIMEOUT })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

// Комментарий не несет никакого смысла. В названии константы DEFAULT_TIMEOUT
// и так понятно, что она делает

/** Стало лучше:
 * Удален ненужный комментарий | 4
 */
