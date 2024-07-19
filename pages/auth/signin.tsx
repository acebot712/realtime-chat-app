import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignIn: React.FC = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {loading && <p>Loading...</p>}
      {!loading && !session && (
        <>
          <p>You are not signed in</p>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </>
      )}
      {!loading && session && (
        <>
          <p>Signed in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default SignIn;
