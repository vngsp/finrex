'use client';
import { createContext, type ReactNode, useContext, useState } from 'react';

type ProfilePicContextType = {
	fileUrl: string | null;
	setFileUrl: (url: string | null) => void;
};

export const ProfilePicContext = createContext<ProfilePicContextType | null>(
	null,
);

type ProfilePicProviderProps = {
	children: ReactNode;
};

export const ProfilePicProvider = ({ children }: ProfilePicProviderProps) => {
	const [fileUrl, setFileUrl] = useState<string | null>(null);

	return (
		<ProfilePicContext.Provider value={{ fileUrl, setFileUrl }}>
			{children}
		</ProfilePicContext.Provider>
	);
};

export const useProfilePic = (): ProfilePicContextType => {
	const ctx = useContext(ProfilePicContext);

	if (!ctx) {
		throw new Error('userProfilePic must be used with your Provider');
	}
	return ctx;
};
