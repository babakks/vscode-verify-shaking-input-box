import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-verify-shaking-input-box.helloWorld', () => {
        const box = vscode.window.createInputBox();
        const intervalId = setInterval(() => {
            box.title = "A constant string";
        }, 500);
        function dispose() {
            clearInterval(intervalId);
            box.dispose();
        };
        box.onDidAccept(dispose);
        box.onDidHide(dispose);
        box.ignoreFocusOut = true;
        box.show();
    });
    context.subscriptions.push(disposable);
}

export function deactivate() { }
