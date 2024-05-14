import { useEffect, useState } from 'react';
import './App.css'
import { TelegramWebAppContainer } from '@telegram-web-app/core';

function App() {
  const [headers, setHeaders] = useState(null);

  useEffect(() => {
    fetch('http://78.140.245.95:5001/headers')
      .then(response => response.json())
      .then(data => setHeaders(data))
  }, []);

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
      <h3>Headers</h3>
      {headers ? 
        <pre className="read-the-docs">
          {JSON.stringify(headers, null, 2)}
        </pre>
      :
        "Загрузка..."
      }

      <h3>User info</h3>
      <code>telegram.WebApp.initData:</code>
      <pre className="read-the-docs">
        {JSON.stringify(jsonObject, null, 2)}
      </pre>
      <code>telegram.WebApp.platform: <p className="read-the-docs">{telegram.WebApp.platform}</p></code>
      <code>telegram.WebApp.version: <p className="read-the-docs">{telegram.WebApp.version}</p></code>
    </>
  )
}

export default App
