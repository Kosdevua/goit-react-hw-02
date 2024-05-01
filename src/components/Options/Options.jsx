import s from './Options.module.css';
import ResetButton from './ResetButton';

const Options = ({ clicks, handleClick, total, resetBtn }) => {
  console.log(total);
  console.log(handleClick);
  console.log(clicks);

  return (
    <ul className={s.btnWrapper}>
      {Object.keys(clicks).map(el => {
        return (
          <li key={el}>
            <button
              onClick={() => {
                handleClick(el);
                console.log(el);
              }}
            >
              {el}
            </button>
          </li>
        );
      })}
      {total > 0 && <ResetButton resetBtn={resetBtn} />}
    </ul>
  );
};

export default Options;
