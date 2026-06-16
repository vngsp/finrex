'use client';
import { Box } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import { type ChangeEvent, useState } from 'react';
import UploadIcon from './icons/UploadIcon.svg';

type Props = {
	goalId: number;
};

const GoalIcon = ({ goalId }: Props) => {
	const [fileUrl, setFileUrl] = useState<string | null>(null);

	const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const currentFile = e.target.files[0];
			setFileUrl(URL.createObjectURL(currentFile));

			const formData = new FormData();
			formData.append('file', currentFile);

			try {
				const req = await axios.post(
					'https://b7web.com.br/uploadtest/',
					formData,
					{
						headers: {
							'Content-type': 'multipart/form-data',
						},
					},
				);
				console.log('Success: ', req.data);
			} catch (error) {
				console.error('Upload Error: ', error);
			}
		}
	};

	const uniqueId = `goal-icon-upload-${goalId}`;

	return (
		<Box sx={{ borderRadius: '50%', bgcolor: 'rgba(93,188,117,0.15)', p: 1.5 }}>
			<Box
				component="input"
				id={uniqueId}
				type="file"
				onChange={handleFileChange}
				sx={{ height: 48, width: 48, cursor: 'pointer', opacity: 0 }}
			/>

			<Box component="label" htmlFor={uniqueId} sx={{ cursor: 'pointer' }}>
				{fileUrl ? (
					<Box sx={{ position: 'absolute', height: 48, width: 48 }}>
						<Image
							src={fileUrl}
							alt="Ícone de Meta"
							width={48}
							height={48}
							style={{
								position: 'relative',
								bottom: 48,
								width: '100%',
								height: '100%',
								borderRadius: '50%',
								objectFit: 'cover',
							}}
						/>
					</Box>
				) : (
					<Box sx={{ position: 'absolute', height: 48, width: 48 }}>
						<UploadIcon
							style={{
								position: 'relative',
								bottom: 48,
								height: 48,
								width: 48,
							}}
						/>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default GoalIcon;
