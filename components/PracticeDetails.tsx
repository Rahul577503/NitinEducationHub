import React from 'react';
import { IPractice } from '@/interface/common';

interface PracticeDetailsProps {
  practice: IPractice;
}

const PracticeDetails: React.FC<PracticeDetailsProps> = ({ practice }) => {
  return (
    <div>
      <h1>{practice.title}</h1>
      <p>{practice.description}</p>
    </div>
  );
};

export default PracticeDetails;
