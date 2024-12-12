import React from 'react';
import GameContainer from '@/components/GameContainer';

const App: React.FC = () => {
  return (
    <div className="bg-[#1D2220] w-screen h-screen flex items-center justify-center">
      <GameContainer />
    </div>
  );
};

export default App;
