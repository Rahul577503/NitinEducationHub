import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { IPhysicsSubject, IChapter } from "@/interface/common";

interface SidebarProps {
  subjects: IPhysicsSubject[];
  onSelectChapter: (chapter: IChapter) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ subjects, onSelectChapter }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [selectedChapter, setSelectedChapter] = useState<IChapter | null>(null);

  const handleSelectChapter = (chapter: IChapter) => {
    setSelectedChapter(chapter);
    onSelectChapter(chapter);

    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="relative ">
      <button
        className="fixed top-30 left-0 text-green-500 px-4 py-2 rounded z-10"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars className="text-2xl " />
      </button>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant="temporary"
      >
        <List>
          {subjects.map((subject) => (
            <div key={subject.id}>
              <ListItem>
                <ListItemText primary={subject.title} className="text-green-900 text-2xl font-extrabold	"/>
              </ListItem>
              <List>
                {subject.chapters.map((chapter) => (
                  <ListItem
                    key={chapter.id}
                    button
                    onClick={() => handleSelectChapter(chapter)}
                    style={{ cursor: "pointer" }} 
                  >
                    <ListItemText primary={chapter.title} className="text-green-500 	" />
                  </ListItem>
                ))}
              </List>
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
