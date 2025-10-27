"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
// Эта функция вызывается когда ваше расширение активируется
function activate(context) {
    // Сообщение в консоль отладки
    console.log('Duplicate Line extension is now active!');
    // Регистрируем команду 'duplicate-line.duplicate'
    let disposable = vscode.commands.registerCommand('duplicate-line.duplicate', () => {
        // Вызываем функцию дублирования
        duplicateCurrentLine();
    });
    // Добавляем команду в подписки контекста
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// Основная функция дублирования
function duplicateCurrentLine() {
    // Получаем активный текстовый редактор
    const editor = vscode.window.activeTextEditor;
    // Если нет активного редактора - выходим
    if (!editor) {
        vscode.window.showWarningMessage('No active editor found!');
        return;
    }
    const document = editor.document;
    const selection = editor.selection;
    // Проверяем есть ли выделение
    if (!selection.isEmpty) {
        // Дублируем выделенный текст
        duplicateSelection(editor, selection);
    }
    else {
        // Дублируем всю строку
        duplicateLine(editor, selection.active.line);
    }
}
// Дублирование выделенного текста
function duplicateSelection(editor, selection) {
    const document = editor.document;
    const selectedText = document.getText(selection);
    // Вставляем после выделения
    editor.edit(editBuilder => {
        editBuilder.insert(selection.end, '\n' + selectedText);
    });
}
// Дублирование всей строки
function duplicateLine(editor, lineNumber) {
    const document = editor.document;
    const line = document.lineAt(lineNumber);
    const lineText = line.text;
    // Вставляем после текущей строки
    const position = new vscode.Position(lineNumber + 1, 0);
    editor
        .edit(editBuilder => {
        editBuilder.insert(position, lineText + '\n');
    })
        .then(success => {
        if (success) {
            // Перемещаем курсор на новую строку
            const newPosition = new vscode.Position(lineNumber + 1, 0);
            const newSelection = new vscode.Selection(newPosition, newPosition);
            editor.selection = newSelection;
        }
    });
}
// Эта функция вызывается когда расширение деактивируется
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map