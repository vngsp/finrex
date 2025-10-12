import PersonalForm from '@/app/(realApp)/profile/components/PersonalForm';

const Page = () => {
  return (
    <div className={'grid grid-cols-2'}>
      <div className={'w-3/4'}>
        <PersonalForm />
      </div>
      <div>//graph</div>
    </div>
  );
};

export default Page;
