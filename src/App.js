import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';



const auth = getAuth(app);


function App() {
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((err => {
        console.error('Error 404');
      }))
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser({});
      console.log('sign out');
    })
    .catch(error => {
      console.error(error);
    })
  }
  return (
    <div className="App">

      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <h2>{user.displayName}</h2>
      <h3>{user.email}</h3>
      <h4>{user.phoneNumber}</h4>
      <img src={user.photoURL}/> <br></br>
      <button onClick={handleGoogleSignOut}>Google Sign Out</button>

    </div>
  );
}

export default App;
