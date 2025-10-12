type Props = {
  position: string;
  relativeY: string;
  relativeX: string;
  rotate?: string;
};
const Cubes = ({ position, relativeY, relativeX, rotate }: Props) => {
  return (
    <div className={`${position} ${relativeY} ${relativeX} ${rotate}`}>
      <div
        className='absolute top-0 left-0 h-11 w-11 rounded-[6px] opacity-70'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[22px] left-[65px] h-6 w-6 rounded-[3px] opacity-70'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[70px] left-[22px] h-9 w-8 rounded-[6px] opacity-60'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[62px] left-[90px] h-9 w-9 rounded-[6px] opacity-60'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[125px] left-[10px] h-3 w-4 rounded-[3px] opacity-30'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[10px] left-[115px] h-5 w-5 rounded-[3px] opacity-70'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[90px] left-[68px] h-4 w-4 rounded-[3px] opacity-60'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[40px] left-[140px] h-5 w-5 rounded-[3px] opacity-60'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[40px] left-[105px] h-4 w-4 rounded-[3px] opacity-60'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[55px] left-[2px] h-3 w-3 rounded-[3px] opacity-70'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[115px] left-[68px] h-4 w-4 rounded-[3px] opacity-30'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className='absolute top-[105px] left-[125px] h-5 w-5 rounded-[3px] opacity-60'
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
    </div>
  );
};

export default Cubes;
