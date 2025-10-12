import ExcludeIcon from '@/app/(realApp)/goals/components/icons/ExcludeIcon.svg';

type Props = {
  onClick: () => void;
};

const ExcludeGoal = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <ExcludeIcon />
    </button>
  );
};

export default ExcludeGoal;
