"use client";

import { useAuth } from "@/app/context/AuthContext";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "./ui/button";

export default function Header() {
    const { user } = useAuth();

    const signIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out", error);
        }
    };

    return (
        <div>
            {user ? null : (
                <Button className="text-sm" onClick={signIn}>
                    Sign In
                </Button>
            )}
        </div>
    );
}
