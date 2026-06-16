import { Box, Stack, Typography } from '@mui/material';
import EvenArrow from '@/features/insights/components/icons/EvenArrow.svg';
import DownArrow from '@/features/insights/components/icons/UpArrow.svg';
import TripleUpArrow from '@/features/profit/components/icons/TripleUpArrow.svg';

type Props = {
	title?: string;
	summaryName?: string;
	growthPercentage?: number;
	bottom?: string;
	fontSize?: string;
	titleFontSize?: string;
	backgroundColor?: string;
	cubeSize?: string;
	arrowDirection?: 'up' | 'down' | 'even';
	arrowSize?: string;
	pastValue?: number;
	currentValue?: number;
};

const Summary = ({
	title,
	summaryName,
	growthPercentage,
	bottom,
	fontSize,
	titleFontSize,
	backgroundColor,
	cubeSize,
	arrowDirection,
	arrowSize,
	pastValue,
	currentValue,
}: Props) => {
	return (
		<Box sx={{ my: 2, color: 'text.primary' }}>
			<Typography fontWeight={700} color="purple.main" sx={{ mb: 1.5 }}>
				{title}
			</Typography>
			<Stack
				direction="row"
				alignItems="center"
				gap={0.5}
				sx={{ fontSize: '0.875rem' }}
			>
				<Box
					sx={{
						mr: 0.5,
						borderRadius: '6px',
						bgcolor: backgroundColor,
						height: cubeSize,
						width: cubeSize,
					}}
				/>
				<Typography fontWeight={600} style={{ fontSize: titleFontSize }}>
					{summaryName}
				</Typography>
				<Stack direction="row" alignItems="center" gap={0.5}>
					<Typography fontWeight={700} style={{ fontSize: fontSize }}>
						{pastValue}
					</Typography>
					{arrowDirection === 'even' ? (
						<EvenArrow style={{ height: arrowSize, width: arrowSize }} />
					) : arrowDirection === 'up' ? (
						<Box sx={{ color: 'primary.main', display: 'flex' }}>
							<TripleUpArrow style={{ height: arrowSize, width: arrowSize }} />
						</Box>
					) : arrowDirection === 'down' ? (
						<Box sx={{ color: 'error.main', display: 'flex' }}>
							<DownArrow style={{ height: arrowSize, width: arrowSize }} />
						</Box>
					) : null}
					<Typography fontWeight={700} style={{ fontSize: fontSize }}>
						{currentValue}
					</Typography>
				</Stack>
				{growthPercentage ? (
					<Typography
						sx={{
							position: 'relative',
							fontSize: 12,
							fontWeight: 600,
							color: 'purple.main',
							bottom: bottom,
						}}
					>
						{currentValue && pastValue && currentValue > pastValue
							? `+${growthPercentage}%`
							: `-${growthPercentage}%`}
					</Typography>
				) : (
					<Typography sx={{ ml: 0.75, fontSize: 12, textWrap: 'nowrap' }}>
						{pastValue && currentValue && pastValue < currentValue
							? `(+${currentValue - pastValue} vs last month)`
							: pastValue && currentValue && pastValue > currentValue
								? `(-${pastValue - currentValue} vs last month)`
								: '(No change)'}
					</Typography>
				)}
			</Stack>
		</Box>
	);
};

export default Summary;
