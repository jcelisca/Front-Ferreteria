import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/credentials";

const Profile = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
            if (docSnap.exists) {
                setUser(docSnap.data());
            }
        });
    }, []);

    return user ? (
        <section>
            <h1>Welcome</h1>
            <div className="text_container">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <hr />
                <small>Joined on: {user.createdAt.toDate().toDateString()}</small>
            </div>
        </section>
    ) : (
        <h1>Loading...</h1>
    )

}

export default Profile;