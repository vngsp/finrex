import { useState } from 'react';

const UserDatas = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('username');

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type='text'
          className={'text-xl font-bold text-[var(--text-color)]'}
          onChange={event => setUsername(event.target.value)}
          autoFocus
          onBlur={handleBlur}
        />
      ) : (
        <h2 className={'text-xl font-bold text-[var(--text-color)]'} onClick={() => setIsEditing(true)}>
          {username}
        </h2>
      )}
      <p className={'text-sm text-[var(--lines-color)]'}>Elijah@gmail.com</p>
    </div>
  );
};

export default UserDatas;
