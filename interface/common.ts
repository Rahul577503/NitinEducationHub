// interfaces.ts

import { Key, ReactNode } from "react";

export interface IPhysicsSubject {
  id: number;
  title: string;
  image: string;
  chapters: IChapter[];
}

export interface IChapter {
  id: Key | null | undefined;
  content: ReactNode;
  title: string;
  descriptions: IDescription[];
}

export interface IDescription {
  title: string;
  content: string;
}

export interface IPhysicsChapter {
  chapterName: string;
  topics: string[];
}


// interfaces.ts
export interface Biodata {
  name: string;
  birth: string;
  address: string;
  height: string;
  mobile: string;
  education: {
      timeline: { year: string; degree: string; percentage: string }[];
  };
  employment: {
      currentJob: string;
      jobDetails: string;
      school:string;
      previousJob: string;
      jobDuration: string;
  };
  family: {
      highlightedSiblings: any;
      father: string;
      mother: string;
      siblings: string[];
  };
  additionalDetails: {
      children: string[];
      grandchildren: string[];
  };
}

export interface IPractice {
  id:number;
  description: string;
  title: string;

}

export interface IpracticeData{
  computerSciencePractices: IPractice[];
  physicsPractices: IPractice[];
  chemistryPractices: IPractice[];
}


export type PostMetadata = {
  id: string
  title: string
  date: string
  coverUrl: string
  content: string
  tags: string[]
  description: string
  theme: string
  series: string
}