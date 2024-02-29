// components/Chapter.tsx
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import { physicsSubjects } from '@/constants/physics';
import { IPhysicsChapter } from '@/interface/common';

interface ChapterProps {
    chapter: IPhysicsChapter;
}

const Chapter: React.FC<ChapterProps> = ({ chapter }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-2">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="text-xl font-semibold">{chapter.chapterName}</h2>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isOpen && (
                <ul className="pl-4">
                    {chapter.topics.map((topic, index) => (
                        <li key={index} className="text-gray-600">{topic}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Chapter;
