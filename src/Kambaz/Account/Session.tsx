import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();

    const fetchProfile = async () => {
        try {
            const currentUser = await client.profile();
            dispatch(setCurrentUser(currentUser));
        } catch (err: any) {
            // 401 is expected when no user is signed in - don't log as error
            if (err.response?.status !== 401) {
                console.error("Unexpected error fetching profile:", err);
            }
            // Set current user to null when not authenticated
            dispatch(setCurrentUser(null));
        }
        setPending(false);
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    if (!pending) {
        return children;
    }

    // Show loading while checking session
    return <div>Loading...</div>;
}