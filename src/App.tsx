import './App.css'
import { TelegramWebAppContainer } from '@telegram-web-app/core';

function App() {


  const telegram = new TelegramWebAppContainer();
  telegram.WebApp.ready();

  let temp = 'query_id=AAGtIGQfAAAAAK0gZB8mElbT&user=%7B%22id%22%3A526655661%2C%22first_name%22%3A%22Vladimir%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22glukhov_root%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1715238992&hash=ad5674bf1212fe4322716649e4ccfe7a37ba80f4cf9d9cc48734ad5b96490bfc'
  // let aaa = 'query_idAAGtIGQfAAAAAK0gZB8mElbTuser{"id":526655661,"first_name":"Vladimir","last_name":"","username":"glukhov_root","language_code":"ru","allows_write_to_pm":true}auth_date1715238992hashad5674bf1212fe4322716649e4ccfe7a37ba80f4cf9d9cc48734ad5b96490bfc';
  let params = new URLSearchParams(temp);
  let jsonObject: any = {};

  for (let [key, value] of params.entries()) {
    if (key === 'user') {
      jsonObject[key] = JSON.parse(decodeURIComponent(value));
    } else {
      jsonObject[key] = value;
    }
  }

  console.log(jsonObject);
  // let initDataJson = JSON.parse(initDataString)
  // let initData = {
  //   'id': initDataString.['id'],
  //   // 'username': initDataString.get('username'),
  //   // 'first_name': initDataString.get('first_name'),
  //   // 'last_name':  JSON.parse(decodeURIComponent(
  //   //   initDataString.get('last_name') || '')),
  //   // 'language_code': initDataString.get('language_code'),
  //   // 'allows_write_to_pm': initDataString.get('allows_write_to_pm'),
  //   // 'auth_date': initDataString.get('auth_date'),
  //   // 'hash': initDataString.get('hash')
  // }

  return (
    <>
      {/* <code>User-Agent: 
        <p className="read-the-docs">{telegram.WebApp.version}</p>
      </code> */}
    
      <h3>Vite + React</h3>
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
