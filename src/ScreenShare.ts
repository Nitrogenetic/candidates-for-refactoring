class ScreenShare {
  restartPresentation(mediaStream: MediaStream) {
    this.stopPresentation();
    this.startPresentation(mediaStream);
  }

  muteIfExistsAudioTracks() {
    if (this.isExistsAudioTracks()) {
      this.muteAudio();
    }
  }

  stopPresentation() {}
  startPresentation(mediaStream: MediaStream) {}
  muteAudio() {}
  isExistsAudioTracks() {}
}

// Было плохо:
// 1) Мы назвали метод startPresentation, а по факту, презентацию мы
// перезапускаем. Это может сбить с толку, тк название функции нам врет.
// 2) startPresentationWithoutSound выполняет 2 действия: перезапускает презентацию
// и выключает звук.
// 3) Флагов в аргументах лучше избегать.

/** Стало лучше:
 * 1) Название изменено на restartPresentation.                           | 1
 * 2) Метод разбит на 2: перезапуск презентации и отключение звука.       | 2; 7;
 * 3) Вместо передачи флага, используется проверка isExistsAudioTracks()  | 8; 16
 * и описан соответствующий метод.
 */
