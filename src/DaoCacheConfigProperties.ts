class DaoCacheConfigProperties {
  aliveCacheDays: number;
  maxCacheElements: number;
}

// Было плохо:
// 1) Наличие избыточного закомментированного кода,
// когда информацию можно хранить в названии переменной

/** Стало лучше:
 * 1) Удалены комментарии, а полезная информация из них записана в названиях переменных. | 2; 3;
 */
