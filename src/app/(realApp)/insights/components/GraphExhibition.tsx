'use client';
import BarGraph from './icons/BarGraph.svg';
import LineGraph from './icons/LineGraph.svg';
import PizzaGraph from './icons/PizzaGraph.svg';
import { useContext } from 'react';
import { ChartStyle, GraphContext } from '@/app/(realApp)/insights/contexts/GraphContext';

const GraphExhibition = () => {
  const ctx = useContext(GraphContext);

  const changeGraph = (style: ChartStyle) => {
    ctx?.setStyle(style);
  };

  return (
    <div className={'flex gap-10'}>
      <LineGraph
        onClick={() => changeGraph('line')}
        className={`h-13 w-13 cursor-pointer ${ctx?.style === 'line' ? 'text-[var(--yellow-theme)]' : 'text-[var(--desactive-color)] hover:text-[var(--yellow-theme)]'}`}
      />
      <BarGraph
        onClick={() => changeGraph('bar')}
        className={`h-13 w-13 cursor-pointer ${ctx?.style === 'bar' ? 'text-[var(--green-theme)]' : 'text-[var(--desactive-color)] hover:text-[var(--green-theme)]'}`}
      />
      <PizzaGraph
        onClick={() => changeGraph('doughnut')}
        className={`h-13 w-13 cursor-pointer ${ctx?.style === 'doughnut' ? 'text-[var(--purple-theme)]' : 'text-[var(--desactive-color)] hover:text-[var(--purple-theme)]'}`}
      />
    </div>
  );
};

export default GraphExhibition;
