import React , { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState('');

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            return listen();
        };

    });

    const userSignOut = () => {
        signOut(auth).then( () => {
            console.log('Sign Out Was Successful')
        }).catch(error => {console.log(error)});
    };

    return (
        <div>
            { authUser ? <> <p> Signed In </p> <button onClick={userSignOut}>Sign Out</button></> : <p> Signed Out </p>}
        </div>
    );
}

export default AuthDetails