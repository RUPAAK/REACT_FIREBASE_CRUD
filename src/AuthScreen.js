import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from 'firebase/auth'

const google= new GoogleAuthProvider()
const github= new GithubAuthProvider()
const auth= getAuth()

const AuthScreen = () => {

    const signInGoogle= async()=>{
        signInWithPopup(auth, google).then((result)=>{
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log(result)
        }).catch((e)=>{
            console.log(e)
        })
    }

    const signInGithub= async()=>{
        signInWithPopup(auth, github).then((result)=>{
            console.log(result)
        }).catch((e)=>{
            console.log(e)
        })
    }

    return (
        <div>
            auth
            <button onClick={signInGoogle}>Googler</button>
            <button onClick={signInGithub}>Github</button>
        </div>
    )
}

export default AuthScreen
