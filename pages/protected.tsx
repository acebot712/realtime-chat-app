import React from 'react';
import { useSession } from 'next-auth/react';

const ProtectedPage: React.FC = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  if (loading) return <div>Loading...</div>;

  if (!session) {
    return <div>You need to be authenticated to view this page.</div>;
  }

  return <div>Welcome {session.user?.email} to the protected page!</div>;
};

export default ProtectedPage;
