"use client";

import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig'; // Adjust path if needed

interface AuthState {
  user: User | null;
  loading: boolean;
  isLifetimeMember: boolean;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLifetimeMember, setIsLifetimeMember] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const playerRef = doc(db, 'Players', currentUser.uid);
        const playerSnap = await getDoc(playerRef);
        if (playerSnap.exists() && playerSnap.data().membership === 'lifetime') {
          setIsLifetimeMember(true);
        } else {
          setIsLifetimeMember(false);
        }
      } else {
        setIsLifetimeMember(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading, isLifetimeMember };
}