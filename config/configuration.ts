import * as fs from 'fs';

export const loadConfig = () => {
  // Получаем путь к конфигурационному файлу из аргументов командной строки
  const configPath = process.argv[2];

  if (!configPath) {
    throw new Error('Конфигурационный файл не указан. Используйте: node app.js path/to/config.json');
  }

  // Проверяем, существует ли файл
  if (!fs.existsSync(configPath)) {
    throw new Error(`Конфигурационный файл не найден: ${configPath}`);
  }

  // Читаем и парсим конфигурационный файл
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  return config;
};