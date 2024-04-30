import s from './Options.module.css';

const Options = ({ clicks, handleClick, total }) => {
  console.log(total);

  return (
    <ul className={s.btnWrapper}>
      {Object.keys(clicks).map(el => {
        return (
          <li key={el}>
            <button
              onClick={() => {
                handleClick(el);
                // console.log(el);
              }}
            >
              {el}
            </button>
          </li>
        );
      })}
      {total > 0 && (
        <li>
          <button
            onClick={() => {
              console.log('resetButton');
            }}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
