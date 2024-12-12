import React, { useState } from 'react';
import { storyData, StoryNode as StoryNodeData } from '@/data/storyData';
import StoryNode from '@/components/StoryNode';

const GameContainer: React.FC = () => {
  const [currentNodeId, setCurrentNodeId] = useState<string>('intro');

  const currentNode: StoryNodeData | undefined = storyData.find(
    (node) => node.id === currentNodeId
  );

  const handleChoiceSelect = (nextNodeId: string) => {
    setCurrentNodeId(nextNodeId);
  };

  const handleRestart = () => {
    setCurrentNodeId('intro'); // Reinicia o jogo voltando ao nó inicial
  };

  if (!currentNode) {
    return <p className="text-center text-[#ccd6cd]">Fim da história!</p>;
  }

  return (
    <div className="w-1/2 text-[#ccd6cd] flex items-center justify-center">
      <StoryNode
        text={currentNode.text}
        choices={currentNode.choices}
        onChoiceSelect={handleChoiceSelect}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default GameContainer;
