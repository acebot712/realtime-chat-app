// pages/index.tsx
import React from 'react';
import SimpleComponent from '../components/SimpleComponent';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <SimpleComponent />
    </div>
  );
};

export default Home;
