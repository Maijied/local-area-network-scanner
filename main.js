const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Ensure this line is present and set to true
      contextIsolation: false // Adding this line to ensure context isolation is disabled
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
