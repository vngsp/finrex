type Props = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  remainingPrice: number;
  price: number;
  setPrice: (value: number) => void;
  savedPrice: number;
  setSavedPrice: (value: number) => void;
};

const GoalInfo = ({ isEditing, setIsEditing, remainingPrice, price, setPrice, savedPrice, setSavedPrice }: Props) => {
  return (
    <div className={'flex flex-col items-center'}>
      <div className={'flex gap-12'}>
        {isEditing ? (
          <div className={'flex gap-12'}>
            <div className={'flex flex-col'}>
              <label className={'text-md font-semibold text-[var(--yellow-theme)]'}>Price:</label>
              <div className={'relative'}>
                <span className={'invisible text-xl font-bold text-[var(--text-color)]'}>{price}</span>
                <input
                  type="text"
                  className={'absolute inset-0 w-full text-xl font-bold text-[var(--text-color)] outline-none'}
                  value={price}
                  onChange={e => setPrice(Number(e.target.value))}
                />
              </div>
            </div>
            <div>
              <h3 className={'text-md font-semibold text-[var(--purple-theme)]'}>Remaining:</h3>
              <p className={'text-xl font-bold text-[var(--text-color)]'}>${remainingPrice}</p>
            </div>
          </div>
        ) : (
          <div className={'flex gap-12'}>
            <div>
              <h3 className={'text-md font-semibold text-[var(--yellow-theme)]'}>Price:</h3>
              <p className={'text-xl font-bold text-[var(--text-color)]'}>${price}</p>
            </div>
            <div>
              <h3 className={'text-md font-semibold text-[var(--purple-theme)]'}>Remaining:</h3>
              <p className={'text-xl font-bold text-[var(--text-color)]'}>${remainingPrice}</p>
            </div>
          </div>
        )}
      </div>
      {isEditing ? (
        <div className={'mt-3 flex flex-col items-center'}>
          <label className={'text-md font-semibold text-[var(--purple-theme)]'}>Total saved:</label>
          <input
            type="text"
            className={'text-center text-xl font-bold text-[var(--text-color)] outline-none'}
            value={savedPrice}
            onChange={e => setSavedPrice(Number(e.target.value))}
          />
        </div>
      ) : (
        <div className={'mt-3'}>
          <h3 className={'text-md font-semibold text-[var(--purple-theme)]'}>Total saved:</h3>
          <p className={'text-center text-xl font-bold text-[var(--text-color)]'}>${savedPrice}</p>
        </div>
      )}
    </div>
  );
};

export default GoalInfo;
