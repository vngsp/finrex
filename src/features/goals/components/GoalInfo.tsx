import { Box, Stack, TextField, Typography } from '@mui/material';

type Props = {
	isEditing: boolean;
	setIsEditing: (value: boolean) => void;
	remainingPrice: number;
	price: number;
	setPrice: (value: number) => void;
	savedPrice: number;
	setSavedPrice: (value: number) => void;
};

const GoalInfo = ({
	isEditing,
	remainingPrice,
	price,
	setPrice,
	savedPrice,
	setSavedPrice,
}: Props) => {
	return (
		<Stack alignItems={'center'}>
			<Stack direction={'row'} gap={6}>
				<Box>
					<Typography variant="body1" fontWeight={600} color={'yellow.main'}>
						Price:{' '}
						<Typography>
							{isEditing ? (
								<TextField
									variant={'standard'}
									type={'number'}
									value={price}
									onChange={(e) => setPrice(Number(e.target.value))}
									sx={{
										'& input': {
											fontSize: '1.5rem',
											fontWeight: 'bold',
											color: 'text.primary',
										},
									}}
								/>
							) : (
								<Typography
									variant={'h6'}
									fontWeight={600}
									color={'textPrimary'}
								>
									${price}
								</Typography>
							)}
						</Typography>
					</Typography>
				</Box>
				<Box>
					<Typography variant="body1" fontWeight={600} color={'purple.main'}>
						Remaining:
					</Typography>
					<Typography variant={'h6'}>${remainingPrice}</Typography>
				</Box>
			</Stack>
			<Box mt={1.5} textAlign={'center'}>
				<Typography variant="body1" fontWeight={600} color={'purple.main'}>
					Total saved:
					<Typography>
						{isEditing ? (
							<TextField
								variant={'standard'}
								type={'number'}
								value={savedPrice}
								onChange={(e) => setSavedPrice(Number(e.target.value))}
								sx={{
									'& input': {
										fontSize: '1.5rem',
										fontWeight: 'bold',
										color: 'text.primary',
									},
								}}
							/>
						) : (
							<Typography
								variant={'h6'}
								fontWeight={'bold'}
								color={'textPrimary'}
							>
								${savedPrice}
							</Typography>
						)}
					</Typography>
				</Typography>
			</Box>
		</Stack>
	);
};

export default GoalInfo;
