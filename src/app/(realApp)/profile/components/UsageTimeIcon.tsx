type Props = {
  monthsUsed: number;
  positionY: number;
  positionX: number;
};

const UsageTimeIcon = ({ monthsUsed, positionY, positionX }: Props) => {
  return (
    <div
      className={
        'relative flex h-6 w-16 items-center justify-center rounded-xl bg-[var(--green-theme)] p-3 text-[12px] font-bold text-nowrap text-[var(--purple-theme)]'
      }
      style={{
        left: `${positionX}px`,
        top: `${positionY}px`,
      }}
    >
      <p>{monthsUsed} months</p>
    </div>
  );
};

export default UsageTimeIcon;
