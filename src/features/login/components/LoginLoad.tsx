type Props = {
  label: string;
};
const LoginLoad = ({ label }: Props) => {
  return (
    <div className={'fixed inset-0 z-50 flex items-center justify-center bg-white/80'}>
      <div>
        <div className='flex flex-col items-center gap-4'>
          <div className='h-12 w-12 animate-spin rounded-full border-6 border-dotted border-[var(--green-theme)] border-t-transparent' />
          <p className='text-sm text-[var(--green-theme)]'>{label}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginLoad;
