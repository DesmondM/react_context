import {useState} from 'react';
import './App.css';
import { UserProvider } from './context/UserContext';
import Dashboard from './Dashboard';


function App() {
  const [user, setUser]= useState({name: 'Desmond'});
  return (
    <UserProvider>
    <div className="App">
      <header>
       This is the Nav
      </header>
      <Dashboard/>
      
    </div>
    </UserProvider>
  );
}

export default App;
