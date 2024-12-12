import React, { useState } from "react";
import { storyData, StoryNode as StoryNodeData } from "@/data/storyData";
import StoryNode from "@/components/StoryNode";

const GameContainer: React.FC = () => {
  const [currentNodeId, setCurrentNodeId] = useState<string>("intro");

  const currentNode: StoryNodeData | undefined = storyData.find(
    (node) => node.id === currentNodeId
  );

  const handleChoiceSelect = (nextNodeId: string) => {
    setCurrentNodeId(nextNodeId);
  };

  const handleRestart = () => {
    setCurrentNodeId("intro"); // Reinicia o jogo voltando ao nó inicial
  };

  if (!currentNode) {
    return (
      <div className="w-full p-4 min-h-screen text-[#ccd6cd] flex flex-col items-center justify-center gap-8">
        <p className="text-center text-[#ccd6cd]">Fim da história!</p>
        <button
          className="border border-[#ebfa8b] hover:border-[#ede376] text-[#ccd6cd] hover:font-medium hover:text-[#ede376] py-2 px-4 rounded transition w-1/2"
          onClick={handleRestart}
        >
          Recomeçar
        </button>
      </div>
    );
  }

  return (
    <div className="w-full p-4 min-h-screen text-[#ccd6cd] flex items-center justify-center">
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
