# Chrome Extension UI Injector Demo

A lightweight Chrome Extension demo that injects a React-based floating UI into web pages. Built using [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for fast development and bundling.

## Features

- 🧩 Chrome Extension manifest v3 setup
- ⚛️ Injects React UI into any webpage
- ⚡ Super fast build and hot reload via Vite
- 🧼 Clean boilerplate to build upon

## 🛠️ Getting Started

### 1. Install dependencies

```bash
1. npm install

2. Run in development mode
npm run dev
This will start the Vite dev server for your popup/content script.

3. Build for production
npm run build
Builds the extension into the build directory.

4. Load in Chrome
Open chrome://extensions
Enable Developer Mode
Click Load unpacked
Select the build folder

5. To test this out, after generating a build, go to suppose "https://example.com/" link and you will see "Injected React UI" UI.

🧪 Testing the UI Injector
Once the extension is loaded, visit any webpage and verify that your React UI is injected into the DOM, such as a floating widget or toolbar.

📦 Dependencies
react
react-dom
vite
@vitejs/plugin-react

