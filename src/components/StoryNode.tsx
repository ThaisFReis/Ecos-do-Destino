import React from 'react';
import { Choice } from '@/data/storyData';

interface StoryNodeProps {
  text: string;
  choices: Choice[];
  onChoiceSelect: (nextNodeId: string) => void;
  onRestart: () => void;
}

const StoryNode: React.FC<StoryNodeProps> = ({ text, choices, onChoiceSelect, onRestart }) => {
  return (
    <div className="p-4 text-[#ccd6cd] rounded-lg w-1/2 max-mobile:w-full" >
      <p className="mb-8 text-xl font-medium max-mobile:text-sm">{text}</p>
      <div className="flex flex-col gap-4 justify-center items-center">
        {choices.length > 0 ? (
          choices.map((choice) => (
            <button
              key={choice.id}
              className="border border-[#ebfa8b] hover:border-[#ede376] text-[#ccd6cd] hover:font-medium hover:text-[#ede376] p-4 rounded transition w-1/2 max-mobile:w-full text-pretty"
              onClick={() => onChoiceSelect(choice.nextNodeId)}
            >
              {choice.text}
            </button>
          ))
        ) : (
          <button
            className="border border-[#ebfa8b] hover:border-[#ede376] text-[#ccd6cd] hover:font-medium hover:text-[#ede376] py-2 px-4 rounded transition w-1/2"
            onClick={onRestart}
          >
            Recomeçar
          </button>
        )}
      </div>
    </div>
  );
};

export default StoryNode;
