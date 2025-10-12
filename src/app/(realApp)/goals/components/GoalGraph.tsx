import FloatPercent from '@/app/(realApp)/goals/components/FloatPercent';
import FormDataGraph from '@/app/(realApp)/insights/components/FormDataGraph';
import { GraphProvider } from '@/app/(realApp)/insights/contexts/GraphContext';

type Props = {
  completePercent?: number;
  remainingPercent?: number;
  customOptions?: object;
  customData?: object;
};

const GoalGraph = ({ completePercent, remainingPercent, customOptions, customData }: Props) => {
  return (
    <GraphProvider initialStyle={'doughnut'}>
      <div className='relative flex items-center justify-center'>
        <FloatPercent
          percent={completePercent}
          color={'var(--green-theme)'}
          barRotation={130}
          orientationX={155}
          orientationY={60}
        />
        <FormDataGraph height={200} width={200} chartOptions={customOptions} chartData={customData} />
        <FloatPercent
          percent={remainingPercent}
          color={'var(--lines-color)'}
          barRotation={60}
          orientationX={25}
          orientationY={60}
        />
      </div>
    </GraphProvider>
  );
};

export default GoalGraph;
