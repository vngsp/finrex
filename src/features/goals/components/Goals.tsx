'use client';
import { Box, Card, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import EditGoal from '@/features/goals/components/EditGoal';
import ExcludeGoal from '@/features/goals/components/ExcludeGoal';
import GoalGraph from '@/features/goals/components/GoalGraph';
import GoalIcon from '@/features/goals/components/GoalIcon';
import GoalInfo from '@/features/goals/components/GoalInfo';
import { usePersistedState } from '@/features/goals/hooks/usePersistedState';

type Props = {
	goalId: number;
	onExclude: (id: number) => void;
	goalName: string;
};

const Goals = ({ goalId, onExclude, goalName }: Props) => {
	const [goalNameState, setGoalNameState] = usePersistedState(
		`${goalName}-goalName`,
		goalName,
	);
	const [price, setPrice] = usePersistedState(`${goalName}-price`, 100);
	const [savedPrice, setSavedPrice] = usePersistedState(
		`${goalName}-savedPrice`,
		0,
	);

	const remainingPrice: number = Number(price - savedPrice);
	const completePercent: number = Number(
		Math.min((savedPrice / price) * 100, 100).toFixed(2),
	);
	const remainingPercent: number = Number(
		(100 - Number(completePercent)).toFixed(2),
	);

	const [isEditing, setIsEditing] = useState(false);

	const customOptions = {
		responsive: true,
		maintainAspectRatio: false,
		cutout: '0%',
	};
	const customData = {
		labels: ['Completed', 'Remaining'],
		datasets: [
			{
				data: [completePercent, 100 - completePercent],
				backgroundColor: ['rgba(93, 188, 117)', 'rgba(93, 188, 117, 0.3)'],
				borderWidth: 0,
				hoverOffset: 4,
			},
		],
	};

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsEditing(false);
			}
		}

		if (isEditing) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isEditing]);

	return (
		<Card
			ref={ref}
			variant="outlined"
			sx={{
				mb: 4,
				width: 256,
				height: 432,
				display: 'flex',
				flexDirection: 'column',
				borderColor: 'primary.main',
				borderWidth: 2,
				px: 2.5,
				py: 3,
			}}
		>
			<Box
				sx={{
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					gap: 2,
				}}
			>
				<GoalIcon goalId={goalId} />
				{isEditing ? (
					<TextField
						variant="standard"
						value={goalNameState}
						onChange={(e) => setGoalNameState(e.target.value)}
						autoFocus
						sx={{
							'& input': {
								fontSize: '1.25rem',
								fontWeight: 'bold',
								color: 'text.primary',
							},
						}}
					/>
				) : (
					<Typography variant="h6" color="text.primary" fontWeight="bold">
						{goalNameState}
					</Typography>
				)}
				<Box sx={{ position: 'absolute', top: 4, right: 12 }}>
					{isEditing && <ExcludeGoal onClick={() => onExclude(goalId)} />}
					<EditGoal onClick={() => setIsEditing(true)} />
				</Box>
			</Box>
			<GoalGraph
				completePercent={completePercent}
				remainingPercent={remainingPercent}
				customOptions={customOptions}
				customData={customData}
			/>
			<GoalInfo
				isEditing={isEditing}
				setIsEditing={setIsEditing}
				remainingPrice={remainingPrice}
				price={price}
				setPrice={setPrice}
				savedPrice={savedPrice}
				setSavedPrice={setSavedPrice}
			/>
		</Card>
	);
};
export default Goals;
