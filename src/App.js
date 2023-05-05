import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';



const auth = getAuth(app);


function App() {
  const googleProvider = new GoogleAuthProvider();

  const gitProvider = new GithubAuthProvider();

  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
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

  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitProvider)
        .then((result) => {
      
      const user = result.user;
      setUser(user);
      console.log(user);
      
    })
      .catch((error) => {
        console.error('error');
      })
}
return (
  <div className="App">

    {
      user.email ? <button onClick={handleGoogleSignOut}>Google Sign Out</button>
        :
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
    }
    <h2>{user.displayName}</h2>
    <h3>{user.email}</h3>
    <h4>{user.phoneNumber}</h4>
    <img src={user.photoURL} /> <br></br>


  </div>
);
}

export default App;
