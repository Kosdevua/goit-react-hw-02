import s from './Options.module.css';

const Options = ({ clicks }) => {
  const hendleClick = click => {
    return console.log(click);
  };
  return (
    <ul className={s.btnWrapper}>
      {Object.keys(clicks).map(click => {
        return (
          <li key={click}>
            <button
              onClick={() => {
                hendleClick(click);
              }}
            >
              {click}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
