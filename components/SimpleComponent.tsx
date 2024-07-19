// components/SimpleComponent.tsx
import React from 'react';

const SimpleComponent: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900">Hello, this is a simple React component!</h1>
      <p className="text-gray-600">This is a paragraph styled using Tailwind CSS.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Click Me
      </button>
    </div>
  );
};

export default SimpleComponent;
