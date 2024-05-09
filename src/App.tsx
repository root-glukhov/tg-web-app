import './App.css'
import { TelegramWebAppContainer } from '@telegram-web-app/core';

function App() {
  const telegram = new TelegramWebAppContainer();
  telegram.WebApp.ready();

  let params = new URLSearchParams(telegram.WebApp.initData);
  let jsonObject: any = {};

  for (let [key, value] of params.entries()) {
    if (key === 'user') {
      jsonObject[key] = JSON.parse(decodeURIComponent(value));
    } else {
      jsonObject[key] = value;
    }
  }

  return (
    <>
      <h3>User info</h3>
      <code>telegram.WebApp.initData:</code>
      <p className="read-the-docs">
        <pre>{JSON.stringify(jsonObject, null, 2)}</pre>
      </p>
      <code>telegram.WebApp.platform: <p className="read-the-docs">{telegram.WebApp.platform}</p></code>
      <code>telegram.WebApp.version: <p className="read-the-docs">{telegram.WebApp.version}</p></code>
    </>
  )
}

export default App
