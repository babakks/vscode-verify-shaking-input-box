# VS Code Shaking Input Box

This repo, which is a sample VS Code extension, is created to help reproduce a bug in the VS Code input box (exposed via the extensions API).

As of my observations, the problem was not present in VS Code `v1.72`. It's now happening in `v1.74` (I'm not sure about `v1.73` since I've skipped that update).

## Steps to reproduce

1. Clone this repo.
2. Open the cloned directory in VS Code.
3. Start debugging by pressing <kbd>F5</kbd>.
4. In the opened window, open the command palette, find the "Hello World" command and invoke it.
5. You should now see a shaking input box, like this:
   ![Shaking input box](/image/shaking-input-box.gif)

## What the extension does

The extension just creates an input box, and repeatedly updates the title of the input box with a constant value:

```ts
const intervalId = setInterval(() => {
    box.title = "A constant string";
}, 500);
```
