import logo from './logo.svg';
import { messaging } from './firebase';
import { getToken } from 'firebase/messaging';
import './App.css';
import { useEffect } from 'react';

function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if(permission === 'granted'){
      //generate token
      const token = await getToken(messaging, {vapidKey: "BLNCzGskONW7-Cj3P8TjIk9ArrAVCAY5dT25pDF6FtsZM7iNARh4UKIh0hSxqnl9pMY0TiwoVdGf1kOSK_BXtCw"})
      console.log('token', token)
    }else if(permission === 'denied'){
      alert("You denied for the notification")
    }
  }

  useEffect(() => {
    //req user for notification permission
    requestPermission()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
