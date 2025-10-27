# Duplicate Line - VS Code Extension

**Автор:** Макашов Артемий Вячеславович, М3120  
**Дата:** 27.10.25  

## Описание

Расширение для Visual Studio Code, позволяющее дублировать текущую строку или выделенный текст с помощью горячих клавиш.

## Функциональность

- 🔄 Дублирование текущей строки
- 📝 Дублирование выделенного текста  
- ⌨️ Горячие клавиши: `Ctrl+Shift+D` (Win) / `Cmd+Shift+D` (Mac)

## Установка
1. Скачайте файл `duplicate-line-1.0.0.vsix`
2. В VS Code: Ctrl+Shift+P → "Extensions: Install from VSIX..."
3. Выберите скачанный файл
4. Перезагрузите VS Code
5. Можно установить через коммандную строку `code --install-extension duplicate-line-1.0.0.vsix`

## Использование
- Дублирование строки: Ctrl+Shift+D
- Дублирование выделения: выделите текст → Ctrl+Shift+D
- Через меню: Ctrl+Shift+P → "Duplicate Line"

### Для разработки
```bash
git clone [https://github.com/YuY-Question/duplicate-line.git]
cd duplicate-line
npm install
npm run compile