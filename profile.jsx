import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase'; // Adjust if your Firebase file path is different
import { doc, getDoc, setDoc } from 'firebase/firestore';

const appId = window.__app_id;

export default function Profile() {
  const user = auth.currentUser;
  const [profile, setProfile] = useState({ name: '', email: '', mobile: '' });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const userDocRef = doc(db, `/artifacts/${appId}/public/data/users/${user?.uid}`);

  useEffect(() => {
    if (!user) return;

    const fetchProfile = async () => {
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data());
      }
      setLoading(false);
    };

    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(userDocRef, profile, { merge: true });
    setMessage('✅ Profile updated successfully!');
  };

  if (!user) return <div className="text-red-500">⚠️ User not authenticated.</div>;
  if (loading) return <div className="text-gray-500">⏳ Loading profile...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4">👤 My Profile</h2>

      <div className="mb-4 text-sm text-gray-600">
        <strong>User ID:</strong> <code>{user.uid}</code>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded text-black"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded text-black"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Mobile Number</label>
          <input
            name="mobile"
            type="tel"
            value={profile.mobile}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded text-black"
            placeholder="Enter your mobile number"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Profile
        </button>
      </form>

      {message && <div className="mt-4 text-green-600">{message}</div>}
    </div>
  );
}
