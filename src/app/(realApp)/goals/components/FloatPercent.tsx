type Props = {
  color?: string;
  percent?: number;
  barRotation?: number;
  orientationX: number;
  orientationY: number;
};
const FloatPercent = ({ color, percent, barRotation, orientationX, orientationY }: Props) => {
  const dinamycStyle: React.CSSProperties = {
    top: orientationY,
    left: orientationX,
    position: 'absolute',
    color: color ?? 'var(--lines-color)',
  };
  return (
    <div className='absolute flex flex-col items-center justify-center text-sm' style={dinamycStyle}>
      <p className='mb-1'>{percent}%</p>
      <div
        className='h-[1px] w-4'
        style={{
          background: color ?? 'var(--lines-color)',
          transform: `rotate(${barRotation ?? 0}deg)`,
        }}
      ></div>
    </div>
  );
};

export default FloatPercent;
