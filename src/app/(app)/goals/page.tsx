'use client';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import AddNewGoal from '@/features/goals/components/AddNewGoal';
import Goals from '@/features/goals/components/Goals';
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
		const goalToRemove = goals.find((goal) => goal.id === id);

		if (goalToRemove) {
			if (typeof window !== 'undefined') {
				localStorage.removeItem(`${goalToRemove.name}-goalName`);
				localStorage.removeItem(`${goalToRemove.name}-price`);
				localStorage.removeItem(`${goalToRemove.name}-savedPrice`);
			}
		}

		setGoals(goals.filter((goal) => goal.id !== id));
	};

	const handleAddGoal = () => {
		const newGoal = {
			id: Date.now(),
			name: `Goal ${goals.length + 1}`,
		};
		setGoals([...goals, newGoal]);
	};

	return (
		<Box>
			<TitleAndSubtitle
				title={'Personal Goals'}
				subTitle={'From savings to success'}
			/>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', rowGap: 4 }}>
				{goals.map((goal) => (
					<Box
						key={goal.id}
						sx={{
							display: 'flex',
							width: '25%',
							justifyContent: 'space-between',
						}}
					>
						<Goals
							goalId={goal.id}
							goalName={goal.name}
							onExclude={handleExcludeGoal}
						/>
					</Box>
				))}
				<AddNewGoal onAddGoal={handleAddGoal} />
			</Box>
		</Box>
	);
};

export default Page;
