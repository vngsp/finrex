'use client';
import { Box } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import type { ChangeEvent } from 'react';
import UploadIcon from '@/features/goals/components/icons/UploadIcon.svg';
import { useProfilePic } from '@/shared/contexts/ProfilePicContext';

const ProfilePic = () => {
	const { fileUrl, setFileUrl } = useProfilePic();

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
							'Content-Type': 'multipart/form-data',
						},
					},
				);
				const newGlobalUrl = req.data.url;
				if (newGlobalUrl) {
					setFileUrl(newGlobalUrl);
				}
				console.log('Success: ', req.data);
			} catch (error) {
				console.error('Upload Error: ', error);
			}
		}
	};

	const uniqueId = 'profile-pic-upl';

	return (
		<Box
			sx={{
				position: 'relative',
				mt: -3,
				mb: 2,
				display: 'flex',
				height: 96,
				width: 96,
				alignItems: 'center',
				justifyContent: 'center',
				overflow: 'hidden',
				borderRadius: '50%',
				bgcolor: 'grey.200',
			}}
		>
			<Box
				component="input"
				id={uniqueId}
				type="file"
				onChange={handleFileChange}
				sx={{
					position: 'absolute',
					inset: 0,
					height: '100%',
					width: '100%',
					cursor: 'pointer',
					opacity: 0,
				}}
			/>

			<Box
				component="label"
				htmlFor={uniqueId}
				sx={{
					position: 'absolute',
					inset: 0,
					height: '100%',
					width: '100%',
					cursor: 'pointer',
				}}
			>
				{fileUrl ? (
					<Image
						src={fileUrl}
						alt={'Foto de Perfil'}
						width={100}
						height={100}
						style={{
							width: '100%',
							height: '100%',
							borderRadius: '50%',
							objectFit: 'cover',
						}}
					/>
				) : (
					<Box
						sx={{
							display: 'flex',
							height: '100%',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
							bgcolor: 'primary.main',
						}}
					>
						<UploadIcon
							style={{ position: 'relative', bottom: 4, height: 48, width: 48 }}
						/>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default ProfilePic;
