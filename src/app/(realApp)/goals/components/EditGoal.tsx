import EditIcon from '@/app/(realApp)/goals/components/icons/EditIcon.svg';
import React from 'react';

type Props = {
  onClick: () => void;
};

const EditGoal = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <EditIcon />
    </button>
  );
};

export default EditGoal;
