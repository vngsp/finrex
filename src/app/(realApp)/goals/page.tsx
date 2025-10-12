'use client';
import Goals from '@/app/(realApp)/goals/components/Goals';
import AddNewGoal from '@/app/(realApp)/goals/components/AddNewGoal';
import { useState, useEffect } from 'react';
import TitleAndSubtitle from '@/shared/components/TitleAndSubtitle';

type GoalType = {
  id: number;
  name: string;
};

const GOALS_STORAGE_KEY = 'goals';

const Page = () => {
  const [goals, setGoals] = useState<GoalType[]>(() => {
    if (typeof window !== 'undefined') {
      const storedGoals = localStorage.getItem(GOALS_STORAGE_KEY);
      return storedGoals ? JSON.parse(storedGoals) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(GOALS_STORAGE_KEY, JSON.stringify(goals));
    }
  }, [goals]);

  const handleExcludeGoal = (id: number) => {
    const goalToRemove = goals.find(goal => goal.id === id);

    if (goalToRemove) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(`${goalToRemove.name}-goalName`);
        localStorage.removeItem(`${goalToRemove.name}-price`);
        localStorage.removeItem(`${goalToRemove.name}-savedPrice`);
      }
    }

    setGoals(goals.filter(goal => goal.id !== id));
  };

  const handleAddGoal = () => {
    const newGoal = {
      id: Date.now(),
      name: `Goal ${goals.length + 1}`,
    };
    setGoals([...goals, newGoal]);
  };

  return (
    <div>
      <TitleAndSubtitle title={'Personal Goals'} subTitle={'From savings to success'} />
      <div className='flex flex-wrap gap-y-8'>
        {goals.map(goal => (
          <div key={goal.id} className={'flex w-1/4 justify-between'}>
            <Goals goalId={goal.id} goalName={goal.name} onExclude={handleExcludeGoal} />
          </div>
        ))}
        <AddNewGoal onAddGoal={handleAddGoal} />
      </div>
    </div>
  );
};

export default Page;
