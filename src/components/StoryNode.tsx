import React from 'react';
import { Choice } from '@/data/storyData';

interface StoryNodeProps {
  text: string;
  choices: Choice[];
  onChoiceSelect: (nextNodeId: string) => void;
}

const StoryNode: React.FC<StoryNodeProps> = ({ text, choices, onChoiceSelect }) => {
  return (
    <div className="p-4 text-[##ccd6cd] rounded-lg">
      <p className="mb-4 text-lg">{text}</p>
      <div className="flex flex-col gap-2 justify-center items-center">
        {choices.map((choice) => (
          <button
            key={choice.id}
            className="border border-[#ebfa8b] hover:border-[#ede376] text-[#ccd6cd] hover:font-medium hover:text-[#ede376] py-2 px-4 rounded transition w-1/2"
            onClick={() => onChoiceSelect(choice.nextNodeId)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoryNode;
