import GrowthIndicator from '@/app/(realApp)/profit/components/GrowthIndicator';

type Props = {
  month: string;
  percentage: number;
  arrowIcon: string;
};

const TopEarnMonths = () => {
  return (
    <>
      <div className={'mb-12 flex flex-col justify-center gap-3 text-[var(--text-color)]'}>
        <GrowthIndicator month={'April'} percentage={11} />
        <GrowthIndicator month={'April'} percentage={11} />
        <GrowthIndicator month={'April'} percentage={11} />
      </div>
    </>
  );
};

export default TopEarnMonths;
