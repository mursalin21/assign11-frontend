import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const auth = getAuth();

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
		});
		return () => unsubscribed;
	}, [auth]);

	const signInUsingGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(auth, googleProvider).then((result) =>
			setUser(result.user)
		);
	};

	const logOut = () => {
		signOut(auth).then(() => {});
	};

	return {
		user,
		signInUsingGoogle,
		logOut,
	};
};

export default useFirebase;
