'use client';
import UploadIcon from '@/app/(realApp)/goals/components/icons/UploadIcon.svg';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';

type Props = {
  goalId: number;
};

const GoalIcon = ({ goalId }: Props) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const currentFile = e.target.files[0];
      setSelectedFile(currentFile);
      setFileUrl(URL.createObjectURL(currentFile));

      const formData = new FormData();
      formData.append('file', currentFile);

      try {
        const req = await axios.post('https://b7web.com.br/uploadtest/', formData, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        });
        console.log('Success: ', req.data);
      } catch (error) {
        console.error('Upload Error: ', error);
      }
    }
  };

  const uniqueId = `goal-icon-upload-${goalId}`;

  return (
    <div className={'rounded-full bg-[var(--green-theme)]/15 p-3'}>
      <input id={uniqueId} className={'h-12 w-12 cursor-pointer opacity-0'} type={'file'} onChange={handleFileChange} />

      <label htmlFor={uniqueId} className={'cursor-pointer'}>
        {fileUrl ? (
          <div className={`absolute h-12 w-12 bg-[url(${fileUrl})]`}>
            <img src={fileUrl} alt='Ícone de Meta' className={'relative bottom-12 h-full w-full rounded-full'} />
          </div>
        ) : (
          <div className={`absolute h-12 w-12`}>
            <UploadIcon className={'relative bottom-12 h-12 w-12'} />
          </div>
        )}
      </label>
    </div>
  );
};

export default GoalIcon;
