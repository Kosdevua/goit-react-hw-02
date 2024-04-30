import s from './Options.module.css';

const Options = ({ clicks, handleClick }) => {
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
    </ul>
  );
};

export default Options;
