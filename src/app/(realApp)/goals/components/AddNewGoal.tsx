'use client';
import BookMarkIcon from '@/app/(realApp)/goals/components/icons/BookMarkIcon.svg';

type Props = {
  onAddGoal: () => void;
};

const AddNewGoal = ({ onAddGoal }: Props) => {
  return (
    <div
      className={
        'mb-8 flex h-108 w-64 flex-col items-center justify-center rounded-md border-2 border-[var(--green-theme)] px-5 py-6'
      }
    >
      <div className={'mb-9 rounded-full bg-[var(--green-theme)]/40 p-7'} onClick={onAddGoal}>
        <BookMarkIcon className={'h-16 w-16'} />
      </div>
      <h2 className={'text-2xl text-[var(--green-theme)]'}>Add new goal</h2>
    </div>
  );
};

export default AddNewGoal;
