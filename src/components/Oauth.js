import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router";

const Oauth = () => {
  const navigate = useNavigate();
  async function onGoogle() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // check for the user 
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)
      // not exist docsnap adding to the database 
      if(!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      toast.success("Sign in with google successfully")
      navigate("/");

    } catch (error) {
      toast.error("Couldn't auth with google");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogle}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
};

export default Oauth;
